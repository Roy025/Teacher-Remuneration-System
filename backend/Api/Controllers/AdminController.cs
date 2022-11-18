using Core.DTOs.OtherDTOs;
using Core.Entities;
using Core.Interfaces.Services;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
public class AdminController : BaseApiController
{
    private readonly IAdminService _adminService;
    public AdminController(IAdminService adminService)
    {
        _adminService = adminService;
    }

    [HttpPost("institute")]
    public async Task<ActionResult<ApiDataResponse<Institute>>> CreateInstituteAsync([FromBody] InstituteDto institute)
    {
        var instituteEntity = await _adminService.CreateInstituteAsync(institute);
        if (instituteEntity == null) return BadRequest("Institute not created");
        return StatusCode(200, new ApiDataResponse<Institute>(instituteEntity, 201, "Institute Created successfully"));
    }
    [HttpPost("department")]
    public async Task<ActionResult<ApiDataResponse<DepartmentResDto>>> CreateDepartmentAsync([FromBody] DepartmentCreateDto department)
    {
        var departmentEntity = await _adminService.CreateDepartmentAsync(department);
        if (departmentEntity == null) return BadRequest("Department not created");
        return StatusCode(200, new ApiDataResponse<DepartmentResDto>(departmentEntity, 201, "Department Created successfully"));
    }
}