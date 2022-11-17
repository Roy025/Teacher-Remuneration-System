using AutoMapper;
using Core.DTOs.OtherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;

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
}
