using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Models;

namespace Core.Interfaces.Services
{
    public interface IAdminService
    {
        Task<Institute> CreateInstituteAsync(InstituteDto institute);
        Task<Institute> DeleteInstituteAsync(Guid institute);
        Task<DepartmentResDto> CreateDepartmentAsync(DepartmentCreateDto department);
        Task<DepartmentResDto> DeleteDepartmentAsync(Guid department);
        Task<TeacherResponseDto> RegisterTeacherAsync(TeacherCreateDto teacher);
        Task<Admin> Register(AdminRegisterDTO adminRegisterDTO);
        Task<AdminLoginResDto> Login(AdminLoginDTO adminLoginDTO);


    }
}