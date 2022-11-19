using System.Net.Mail;
using AutoMapper;
using Business.Specifications.AdminSpecifications;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;
using Core.Models;
using Core.Utils;

namespace Business.Services;
public class AdminService : IAdminService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly ITokenService _tokenService;
    public AdminService(IUnitOfWork unitOfWork, IMapper mapper, ITokenService tokenService)
    {
        _tokenService = tokenService;
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    public async Task<DepartmentResDto> CreateDepartmentAsync(DepartmentCreateDto department)
    {
        var departmentEntity = _mapper.Map<Department>(department);
        _unitOfWork.Repository<Department>().Add(departmentEntity);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return _mapper.Map<DepartmentResDto>(departmentEntity);
    }


    public async Task<Institute> CreateInstituteAsync(InstituteDto institute)
    {
        var instituteEntity = _mapper.Map<Institute>(institute);
        // 
        _unitOfWork.Repository<Institute>().Add(instituteEntity);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return instituteEntity;
    }

    public async Task<DepartmentResDto> DeleteDepartmentAsync(Guid department)
    {
        var departmentEntity = await _unitOfWork.Repository<Department>().GetByIdAsync(department);
        if (departmentEntity == null) return null;
        _unitOfWork.Repository<Department>().Delete(departmentEntity);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return _mapper.Map<DepartmentResDto>(departmentEntity);
    }

    public async Task<Institute> DeleteInstituteAsync(Guid institute)
    {
        var instituteEntity = await _unitOfWork.Repository<Institute>().GetByIdAsync(institute);
        if (instituteEntity == null) return null;
        _unitOfWork.Repository<Institute>().Delete(instituteEntity);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return instituteEntity;
    }

    public async Task<AdminLoginResDto> Login(AdminLoginDTO adminLoginDTO)
    {
        var spec = new AdminByEmailSpecification(adminLoginDTO.email);
        var admins = await _unitOfWork.Repository<Admin>().ListAllAsyncWithSpec(spec);

        if (admins == null) return null;

        var admin = admins.FirstOrDefault();
        if (admin == null) return null;

        if (!BCrypt.Net.BCrypt.Verify(adminLoginDTO.Password, admin.Password)) return null;

        return new AdminLoginResDto
        {
            Email = admin.Email,
            Token = _tokenService.CreateToken(admin),
            Role = admin.Role
        };
    }

    public async Task<Admin> Register(AdminRegisterDTO adminRegisterDTO)
    {
        ValidateEmailAddress(adminRegisterDTO.Email);
        var admin = _mapper.Map<Admin>(adminRegisterDTO);
        admin.Password = BCrypt.Net.BCrypt.HashPassword(adminRegisterDTO.Password);
        _unitOfWork.Repository<Admin>().Add(admin);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return admin;
    }

    public async Task<TeacherResponseDto> RegisterTeacherAsync(TeacherCreateDto teacher)
    {
        var teacherEntity = _mapper.Map<Teacher>(teacher);
        teacherEntity.Password = BCrypt.Net.BCrypt.HashPassword(teacher.Password);
        _unitOfWork.Repository<Teacher>().Add(teacherEntity);
        Console.WriteLine(teacherEntity.Id);
        Console.WriteLine(teacherEntity.Email);
        Console.WriteLine(teacherEntity.Password);
        Console.WriteLine(teacherEntity.DepartmentId);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return _mapper.Map<TeacherResponseDto>(teacherEntity);
    }

    public async Task<TeacherResponseDto> UpdateTeacherAsync(Guid teacher, TeacherUpdateDto teacherUpdateDto)
    {
        var teacherEntity = await _unitOfWork.Repository<Teacher>().GetByIdAsync(teacher);
        if (teacherEntity == null) return null;

        if (!string.IsNullOrEmpty(teacherUpdateDto.Password))
            teacherEntity.Password = BCrypt.Net.BCrypt.HashPassword(teacherUpdateDto.Password);

       
        if(!string.IsNullOrEmpty(teacherUpdateDto.Email))
            teacherEntity.Email = teacherUpdateDto.Email;
        
        if(!string.IsNullOrEmpty(teacherUpdateDto.Role))
            teacherEntity.Role = teacherUpdateDto.Role;

        
        _unitOfWork.Repository<Teacher>().Update(teacherEntity);
        var result = await _unitOfWork.Complete();
        
        if (result <= 0) return null;
        return _mapper.Map<TeacherResponseDto>(teacherEntity);
    }

    private bool ValidateEmailAddress(string email)
    {
        if (string.IsNullOrEmpty(email)) return false;

        try
        {
            MailAddress to = new MailAddress(email);

            return true;
        }
        catch (Exception e)
        {
            throw new BadRequestException("Invalid Email Address");
        }
    }
}
