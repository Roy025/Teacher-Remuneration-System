using AutoMapper;
using Business.Specifications.ExamSpecifications;
using Core.DTOs.CourseDTOs;
using Core.DTOs.ExamDTOs;
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
                if(teacher != null)
                {
                    exam.Members.Add(teacher);
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

    public Task<ExamResponseDtoChairman> UpdateExamFromChairman(ExamUpdateFromChairmanDto examUpdateFromChairmanDto, UserFromToken user)
    {
        throw new NotImplementedException();
    }
}
