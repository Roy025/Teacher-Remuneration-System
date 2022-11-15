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
}