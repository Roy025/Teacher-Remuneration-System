using AutoMapper;
using Business.Specifications.TeacherSpecifications;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;
using Core.Params;

namespace Business.Services;
public class TeacherService : ITeacherService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public TeacherService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    public Task<TeacherResponseDto> CreateTeacherAsync(TeacherCreateDto teacher)
    {
        throw new NotImplementedException();
    }

    public async Task<TeacherResponseDto> GetTeacherByIdAsync(Guid id)
    {
        var teacher = await _unitOfWork.Repository<Teacher>().GetByIdAsync(id);

        return _mapper.Map<TeacherResponseDto>(teacher);
    }

    public async Task<IReadOnlyList<TeacherResponseDto>> GetTeachersAsync(TeacherReqParams teacherParams)
    {
        var spec = new TeacherSpecification(teacherParams);

        var teachers = await _unitOfWork.Repository<Teacher>().ListAllAsyncWithSpec(spec);

        var retTeachers = _mapper.Map<IReadOnlyList<TeacherResponseDto>>(teachers);
        
        return retTeachers;
    }

    public Task<TeacherResponseDto> UpdateTeacherAsync(Guid id, TeacherUpdateDto teacher)
    {
        throw new NotImplementedException();
    }
}
