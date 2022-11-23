using AutoMapper;
using Business.Specifications.ExamSpecifications;
using Core.DTOs.CourseDTOs;
using Core.DTOs.ExamDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;
using Core.Models;
using Core.Params;
using Core.Utils;

namespace Business.Services;
public class ExamService : IExamService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public ExamService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    public async Task<ExamResponseDtoDirector> CreateExamsFromDirector(ExamCreateFromDirectorDto examCreateFromDirectorDto, UserFromToken user)
    {
        if (user.Role != "Director")
        {
            throw new UnAuthorizedException("You are not authorized to perform this action");
        }
        var param = new ExamReqParams
        {
            Session = examCreateFromDirectorDto.Session,
            Semester = examCreateFromDirectorDto.Semester,
            DepartmentId = user.DepartmentId
        };

        var spec = new ExamForDirectorSpecification(param);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        var exam = exams.FirstOrDefault();
        if (exams.Count() > 0)
        {
            //update first
            _unitOfWork.Repository<Exam>().Delete(exam);
        }
        else
        {
            //create new
            exam = new Exam
            {
                Session = examCreateFromDirectorDto.Session,
                Semester = examCreateFromDirectorDto.Semester,
                DepartmentId = user.DepartmentId,
                Chairman = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examCreateFromDirectorDto.Chairman.Id),
                CheifInvigilator = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examCreateFromDirectorDto.CheifInvigilator.Id),
                Members = new List<Teacher>()
            };
            foreach (var member in examCreateFromDirectorDto.Members)
            {
                var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(member.Id);
                if (teacher != null)
                {
                    exam.Members.Add(teacher);
                }
            }
            foreach (var course in examCreateFromDirectorDto.Courses)
            {
                var courseExam = await _unitOfWork.Repository<Course>().GetByIdAsync(course.Id);
                if (courseExam != null)
                {
                    if (courseExam.Type.Equals("Theory"))
                    {
                        var theoryCourse = new TheoryCourseResponsibles();
                        theoryCourse.Course = courseExam;
                        // theoryCourse.Exam = exam;
                        exam.TheoryCourses.Add(theoryCourse);
                    }
                    else if (courseExam.Type.Equals("Lab"))
                    {
                        var labCourse = new LabCourseResponsibles();
                        labCourse.Course = courseExam;
                        // labCourse.Exam = exam;
                        exam.LabCourses.Add(labCourse);
                    }
                    else if(courseExam.Type.Equals("TermPaper"))
                    {
                        var termPaper = new TermPaperResponsibilities();
                        termPaper.Course = courseExam;
                        // termPaper.Exam = exam;
                        exam.TermPapers.Add(termPaper);
                    }
                    else 
                    {
                        throw new BadRequestException("Course type is not valid");
                    }
                }
            }
            _unitOfWork.Repository<Exam>().Add(exam);
        }
        var result = await _unitOfWork.Complete();
        if (result <= 0)
        {
            throw new("Failed to create exam");
        }
        var res = _mapper.Map<Exam, ExamResponseDtoDirector>(exam);
        res.Courses = examCreateFromDirectorDto.Courses;
        return res;
    }

    public async Task<ExamResponseDtoDirector> GetExamsForDirectorAsync(ExamReqParams examParams, UserFromToken user)
    {
        if (user.Role != "Director")
            throw new UnAuthorizedException("You are not authorized to perform this action");
        
        examParams.DepartmentId = user.DepartmentId;
        var spec = new ExamForDirectorSpecification(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.FirstOrDefault();
        var examResponseDto = _mapper.Map<ExamResponseDtoDirector>(exam);
        foreach (var course in exam.TheoryCourses)
        {
            var courseDto = _mapper.Map<CourseForExamDto>(course.Course);
            examResponseDto.Courses.Add(courseDto);
        }
        foreach (var course in exam.LabCourses)
        {
            var courseDto = _mapper.Map<CourseForExamDto>(course.Course);
            examResponseDto.Courses.Add(courseDto);
        }
        return examResponseDto;
    }

    // public async Task<IEnumerable<string>> GetSemestersBySessionForDirector(string session, UserFromToken user)
    // {
    //     if (user.Designation != "Director")
    //         throw new UnAuthorizedException("You are not authorized to perform this action");
    //     var param = new ExamReqParamOnlySession();
    //     param.Session = session;
    //     param.TeacherId = user.UserId;
    //     param.DepartmentId = user.DepartmentId;
    //     var spec = new SessionOnlySpecification(param);
    //     var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
    //     var semesters = exams.Select(x => x.Semester).Distinct();
    //     return semesters;
    // }

    public Task<IEnumerable<string>> GetExamSessionsForChairman(ExamReqParams examReqParams, UserFromToken user)
    {
        if (user.UserId == null)
            throw new UnAuthorizedException("You are not authorized to perform this action");

        // var spec  = new ExamSpecificationForChairman(examReqParams);

        throw new NotImplementedException();
    }

    public async Task<IReadOnlyList<CourseForExamDto>> GetCoursesForChairman(ExamReqParams examParams, UserFromToken user)
    {
        examParams.DepartmentId = user.DepartmentId;
        var spec = new ExamForDirectorSpecification(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.FirstOrDefault();
        var labCourses = exam.LabCourses.Select(x => x.Course);
        var theoryCourse = exam.TheoryCourses.Select(x => x.Course);
        var termPaperCourses = exam.TermPapers.Select(x => x.Course);
        var courses = labCourses.Concat(theoryCourse).Concat(termPaperCourses);
        var courseDtos = _mapper.Map<IReadOnlyList<CourseForExamDto>>(courses);
        return courseDtos;
    }

    public async Task<IReadOnlyList<TeacherResponseDto>> GetTeachersForChairman(ExamReqParams examParams, UserFromToken user)
    {
        examParams.DepartmentId = user.DepartmentId;
        var spec = new ExamForDirectorSpecification(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.FirstOrDefault();
        var teachers = exam.Members;
        var teacherDtos = _mapper.Map<IReadOnlyList<TeacherResponseDto>>(teachers);
        return teacherDtos;
    }

    public Task<ExamResponseDtoChairman> UpdateExamFromChairman(ExamUpdateFromChairmanDto examUpdateFromChairmanDto, UserFromToken user)
    {
        
        throw new NotImplementedException();
    }

    public async Task<ExamResponseDtoChairman> GetExamsForChairmanAsync(ExamReqParams examParams, UserFromToken user)
    {
        examParams.DepartmentId = user.DepartmentId;
        var spec = new ExamForDirectorSpecification(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.FirstOrDefault();
        throw new NotImplementedException();
    }
}
