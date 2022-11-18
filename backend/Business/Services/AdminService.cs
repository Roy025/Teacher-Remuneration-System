using AutoMapper;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;
using Core.Models;

namespace Business.Services;
public class AdminService : IAdminService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public AdminService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    public async Task<DepartmentResDto> CreateDepartmentAsync(DepartmentCreateDto department)
    {
        var departmentEntity = _mapper.Map<Department>(department);
        _unitOfWork.Repository<Department>().Add(departmentEntity);
        var result  = await _unitOfWork.Complete();
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

    public async Task<TeacherResponseDto> RegisterTeacherAsync(TeacherCreateDto teacher)
    {
        var teacherEntity = _mapper.Map<Teacher>(teacher);
        _unitOfWork.Repository<Teacher>().Add(teacherEntity);
        var result = await _unitOfWork.Complete();
        if (result <= 0) return null;
        return _mapper.Map<TeacherResponseDto>(teacherEntity);
    }
}
