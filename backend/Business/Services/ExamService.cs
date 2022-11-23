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
                else if (courseExam.Type.Equals("TermPaper"))
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
        if (exam == null)
            throw new NotFoundException("No exam found");
        var examResponseDto = _mapper.Map<ExamResponseDtoDirector>(exam);
        foreach (var course in exam.TheoryCourses)
        {
            var courseDto = _mapper.Map<CourseForExamDto>(course.Course);
            examResponseDto.Courses.Add(courseDto);
            System.Console.WriteLine(course.Course.Code);
        }
        foreach (var course in exam.LabCourses)
        {
            var courseDto = _mapper.Map<CourseForExamDto>(course.Course);
            examResponseDto.Courses.Add(courseDto);
            System.Console.WriteLine(courseDto.Code);
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
        System.Console.WriteLine("------------------");
        System.Console.WriteLine("------------------");
        System.Console.WriteLine("------------------");
        System.Console.WriteLine("------------------");
        System.Console.WriteLine("------------------");
        System.Console.WriteLine(examParams.DepartmentId);
        System.Console.WriteLine(examParams.Session);
        System.Console.WriteLine(examParams.Semester);
        var spec = new ExamForDirectorSpecification(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.FirstOrDefault();
        if (exam == null)
            throw new NotFoundException("No exam found");
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

    public async Task<ExamResponseDtoChairman> UpdateExamFromChairman(ExamUpdateFromChairmanDto examUpdateFromChairmanDto, UserFromToken user)
    {
        var examParams = new ExamReqParams
        {

            Session = examUpdateFromChairmanDto.Session,
            Semester = examUpdateFromChairmanDto.Semester,
            DepartmentId = user.DepartmentId
        };
        // examParams.DepartmentId = user.DepartmentId;
        var spec = new ExamSpecificationForChairman(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.FirstOrDefault();

        if (exam.ChairmanId != user.UserId)
            throw new UnAuthorizedException("You are not authorized to perform this action");
        if (exam != null) _unitOfWork.Repository<Exam>().Delete(exam);
        // Question Setter
        if (examUpdateFromChairmanDto.QuestionSetters != null)
        {
            foreach (var data in examUpdateFromChairmanDto.QuestionSetters)
            {
                var theory = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (theory != null)
                    theory.QuestionSetters = new List<Teacher>();
            }
            foreach (var data in examUpdateFromChairmanDto.QuestionSetters)
            {
                var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(data.Teacher.Id);
                var course = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.QuestionSetters.Add(teacher);
            }
        }

        // Moderator
        if (examUpdateFromChairmanDto.QuestionModerators != null)
            foreach (var data in examUpdateFromChairmanDto.QuestionModerators)
            {
                var mod = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (mod != null)
                    mod.QuestionModeratorId = data.Teacher.Id;
            }

        // AnswerPaperChecker PartA
        if (examUpdateFromChairmanDto.AnswerpaperCheckersPartA != null)
        {
            foreach (var data in examUpdateFromChairmanDto.AnswerpaperCheckersPartA)
            {
                var ans = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (ans != null)
                    ans.AnswerPaperCheckerPartAId = data.Teacher.Id;
            }
        }
        // AnswerPaperChecker PartB
        if (examUpdateFromChairmanDto.AnswerpaperCheckersPartB != null)
        {
            foreach (var data in examUpdateFromChairmanDto.AnswerpaperCheckersPartB)
            {
                var course = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.AnswerPaperCheckerPartBId = data.Teacher.Id;
            }
        }
        // TermTestAnswerCheckers
        if (examUpdateFromChairmanDto.TermTestAnswerCheckers != null)
        {
            foreach (var data in examUpdateFromChairmanDto.TermTestAnswerCheckers)
            {
                var course = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.TermTestAnswerCheckerId = data.Teacher.Id;
            }
        }

        // LabExaminers
        if (examUpdateFromChairmanDto.LabExaminers != null)
        {

            foreach (var data in examUpdateFromChairmanDto.LabExaminers)
            {

                var course = exam.LabCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.ExaminerId = data.Teacher.Id;
            }
        }

        // Tabulators
        if (examUpdateFromChairmanDto.Tabulators != null)
        {

            foreach (var data in examUpdateFromChairmanDto.Tabulators)
            {
                var labcourse = exam.LabCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (labcourse != null)
                    labcourse.TabulatorId = data.Teacher.Id;
                var theory = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (theory != null)
                    theory.TabulatorId = data.Teacher.Id;
                var term = exam.TermPapers.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (term != null)
                    term.TabulatorId = data.Teacher.Id;
            }
        }

        // VivaExaminers
        if (examUpdateFromChairmanDto.VivaExaminers != null)
        {

            foreach (var data in examUpdateFromChairmanDto.VivaExaminers)
            {
                var lab = exam.LabCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (lab != null)
                    lab.VivaExaminerId = data.Teacher.Id;
            }
        }

        // ScrutinizersPartA
        if (examUpdateFromChairmanDto.ScrutinizersPartA != null)
        {

            foreach (var data in examUpdateFromChairmanDto.ScrutinizersPartA)
            {
                var course = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.QuestionScrutinizerPartAId = data.Teacher.Id;
            }
        }

        // ScrutinizersPartB
        if (examUpdateFromChairmanDto.ScrutinizersPartB != null)
        {

            foreach (var data in examUpdateFromChairmanDto.ScrutinizersPartB)
            {
                var course = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.QuestionScrutinizerPartBId = data.Teacher.Id;
            }
        }

        // QuestionTypers
        if (examUpdateFromChairmanDto.QuestionTypers != null)
            foreach (var data in examUpdateFromChairmanDto.QuestionTypers)
            {
                var course = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.QuestionTyperId = data.Teacher.Id;
            }

        // Invigilators
        if (examUpdateFromChairmanDto.Invigilators != null)
        {

            exam.Invigilators = new List<Invigilator>();
            foreach (var data in examUpdateFromChairmanDto.Invigilators)
            {
                var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(data.Id);
                var invigilator = new Invigilator
                {
                    Teacher = teacher,
                    ExamId = exam.Id
                };
                exam.Invigilators.Add(invigilator);
            }

        }
        // TermPaperData
        if (examUpdateFromChairmanDto.TermPaperData != null)
        {

            foreach (var data in examUpdateFromChairmanDto.TermPaperData)
            {
                var supervisors = new List<Teacher>();
                foreach (var supervisor in data.Supervisors)
                {
                    var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(supervisor.Id);
                    supervisors.Add(teacher);
                }
                var course = exam.TermPapers.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (course != null)
                    course.Supervisors = supervisors;
                var examiners = new List<Teacher>();
                foreach (var examiner in data.Examiners)
                {
                    var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examiner.Id);
                    examiners.Add(teacher);
                }
                var term = exam.TermPapers.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (term != null)
                    term.Examiners = examiners;
            }
        }

        // regisretedStudents
        if (examUpdateFromChairmanDto.RegisteredStudents != null)
        {

            foreach (var data in examUpdateFromChairmanDto.RegisteredStudents)
            {
                var theory = exam.TheoryCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (theory != null)
                    theory.NumberOfRegisteredStudents = data.NumberOfStudents;
                var lab = exam.LabCourses.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (lab != null)
                    lab.NumberOfRegisteredStudents = data.NumberOfStudents;
                var term = exam.TermPapers.FirstOrDefault(x => x.CourseId == data.Course.Id);
                if (term != null)
                    term.NumberOfRegisteredStudents = data.NumberOfStudents;
            }

        }

        _unitOfWork.Repository<Exam>().Add(exam);
        var result = await _unitOfWork.Complete();
        if (result <= 0)
            throw new BadRequestException("Failed to update exam");

        var res = _mapper.Map<ExamResponseDtoChairman>(examUpdateFromChairmanDto);
        return res;

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
