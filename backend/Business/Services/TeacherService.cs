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
    private readonly ITokenService _tokenService;
    public TeacherService(IUnitOfWork unitOfWork, ITokenService tokenService, IMapper mapper)
    {
        _tokenService = tokenService;
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    public async Task<TeacherLoginDto> CreateTeacherAsync(TeacherCreateDto teacher)
    {
        teacher.Password = BCrypt.Net.BCrypt.HashPassword(teacher.Password);
        var teacherEntity = _mapper.Map<Teacher>(teacher);
        _unitOfWork.Repository<Teacher>().Add(teacherEntity);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return GetTeacherLoginDto(teacherEntity);
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
    private TeacherLoginDto GetTeacherLoginDto(Teacher teacherEntity)
    {
        return new TeacherLoginDto
        {
            Email = teacherEntity.Email,
            Designation = teacherEntity.Designation,
            Image = teacherEntity.Image,
            Token = _tokenService.CreateToken(teacherEntity),
        };
    }
}
