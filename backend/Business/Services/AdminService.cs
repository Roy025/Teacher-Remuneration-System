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

    public Task<Institute> CreateDepartmentAsync(Department department)
    {
        throw new NotImplementedException();
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

    public async Task<IReadOnlyList<Institute>> GetAllInstituteAsync()
    {
        var institutes = await _unitOfWork.Repository<Institute>().ListAllAsync();
        return institutes;
    }
}
