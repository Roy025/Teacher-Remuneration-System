using AutoMapper;
using Business.Specifications.ExamSpecifications;
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
        if (user.Designation != "Director")
        {
            throw new UnAuthorizedException("You are not authorized to perform this action");
        }
        var param = new ExamReqParams
        {
            Session = examCreateFromDirectorDto.Session,
            Semester = examCreateFromDirectorDto.Semester,
            Department = user.Department
        };

        var spec = new ExamWithMembersSpecification(param);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        var exam = exams.FirstOrDefault();
        if (exams.Count() > 0)
        {
            //update first
            exam.Chairman = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examCreateFromDirectorDto.Chairman.Id);
            exam.CheifInvigilator = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examCreateFromDirectorDto.CheifInvigilator.Id);
            exam.Members = new List<Teacher>();
            foreach (var member in examCreateFromDirectorDto.Members)
            {
                var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(member.Id);
                exam.Members.Add(teacher);
            }
            _unitOfWork.Repository<Exam>().Update(exam);
        }
        else
        {
            //create new
            exam = new Exam
            {
                Session = examCreateFromDirectorDto.Session,
                Semester = examCreateFromDirectorDto.Semester,
                Department = user.Department,
                Chairman = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examCreateFromDirectorDto.Chairman.Id),
                CheifInvigilator = await _unitOfWork.Repository<Teacher>().GetByIdAsync(examCreateFromDirectorDto.CheifInvigilator.Id),
                Members = new List<Teacher>()
            };
            foreach (var member in examCreateFromDirectorDto.Members)
            {
                var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(member.Id);
                exam.Members.Add(teacher);
            }
            _unitOfWork.Repository<Exam>().Add(exam);
        }
        var result = await _unitOfWork.Complete();
        if (result <= 0)
        {
            throw new("Failed to create exam");
        }
        return _mapper.Map<Exam, ExamResponseDtoDirector>(exam);
    }

    public async Task<ExamResponseDtoDirector> GetExamsForDirectorAsync(ExamReqParams examParams, UserFromToken user)
    {
        if (user.Designation != "Director")
            throw new UnAuthorizedException("You are not authorized to perform this action");
        examParams.Department = user.Department;

        var spec = new ExamWithMembersSpecification(examParams);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        if (exams == null)
            throw new NotFoundException("No exam found");
        var exam = exams.ElementAt(0);
        var examResponseDto = _mapper.Map<ExamResponseDtoDirector>(exam);
        return examResponseDto;
    }

    public async Task<IEnumerable<string>> GetSemestersBySessionForDirector(string session, UserFromToken user)
    {
        if (user.Designation != "Director")
            throw new UnAuthorizedException("You are not authorized to perform this action");
        var param = new ExamReqParamOnlySession();
        param.Session = session;
        param.TeacherId = user.UserId;
        param.Department = user.Department;
        var spec = new SessionOnlySpecification(param);
        var exams = await _unitOfWork.Repository<Exam>().ListAllAsyncWithSpec(spec);
        var semesters = exams.Select(x => x.Semester).Distinct();
        return semesters;
    }

    public Task<IEnumerable<string>> GetExamSessionsForChairman(ExamReqParams examReqParams, UserFromToken user)
    {
        if (user.UserId == null)
            throw new UnAuthorizedException("You are not authorized to perform this action");

        // var spec  = new ExamSpecificationForChairman(examReqParams);

        throw new NotImplementedException();
    }
}
