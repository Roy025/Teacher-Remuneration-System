using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.OtherDTOs;
using Core.Entities;

namespace Core.Interfaces.Services
{
    public interface IAdminService
    {
        Task<Institute> CreateInstituteAsync(InstituteDto institute);
        Task<IReadOnlyList<Institute>> GetAllInstituteAsync();
        Task<DepartmentResDto> CreateDepartmentAsync(DepartmentCreateDto department);
    }
}