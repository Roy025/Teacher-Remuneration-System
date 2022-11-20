using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Services;
using Core.Models;
using Core.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
public class AdminController : BaseApiController
{
    private readonly IAdminService _adminService;
    private readonly ITokenService _tokenService;
    // private UserFromToken? _user = null;
    public AdminController(IAdminService adminService, ITokenService tokenService)
    {
        _tokenService = tokenService;
        _adminService = adminService;
        // Console.WriteLine(_user);

    }

    [HttpPost("register")]
    public async Task<ActionResult<ApiDataResponse<Admin>>> Register([FromBody] AdminRegisterDTO adminRegisterDTO)
    {
        // var user = GetUserFromToken();
        var admin = await _adminService.Register(adminRegisterDTO);
        return StatusCode(201, new ApiDataResponse<Admin>(admin, 201, "Admin created successfully"));
    }

    [HttpPost("login")]
    public async Task<ActionResult<ApiDataResponse<AdminLoginResDto>>> Login([FromBody] AdminLoginDTO adminLoginDTO)
    {
        var admin = await _adminService.Login(adminLoginDTO);
        if (admin == null) return Unauthorized(new ApiResponse(401, "Invalid email or password"));
        return Ok(new ApiDataResponse<AdminLoginResDto>(admin, 200, "Admin logged in successfully"));
    }

    [HttpPost("institute")]
    public async Task<ActionResult<ApiDataResponse<Institute>>> CreateInstituteAsync([FromBody] InstituteDto institute)
    {
        
        // var user = GetUserFromToken();
        var instituteEntity = await _adminService.CreateInstituteAsync(institute);
        if (instituteEntity == null) return BadRequest("Institute not created");
        return StatusCode(200, new ApiDataResponse<Institute>(instituteEntity, 201, "Institute Created successfully"));
    }

    [HttpDelete("institute/{institute}")]
    public async Task<ActionResult<ApiDataResponse<Institute>>> DeleteInstituteAsync([FromRoute] Guid institute)
    {
        // var user = GetUserFromToken();
        var instituteEntity = await _adminService.DeleteInstituteAsync(institute);
        if (instituteEntity == null) return BadRequest("Institute not deleted");
        return StatusCode(200, new ApiDataResponse<Institute>(instituteEntity, 200, "Institute deleted successfully"));
    }

    [HttpPost("department")]
    public async Task<ActionResult<ApiDataResponse<DepartmentResDto>>> CreateDepartmentAsync([FromBody] DepartmentCreateDto department)
    {

        // var user = GetUserFromToken();
        var departmentEntity = await _adminService.CreateDepartmentAsync(department);
        if (departmentEntity == null) return BadRequest("Department not created");
        return StatusCode(200, new ApiDataResponse<DepartmentResDto>(departmentEntity, 201, "Department Created successfully"));
    }

    [HttpDelete("department/{department}")]
    public async Task<ActionResult<ApiDataResponse<DepartmentResDto>>> DeleteDepartmentAsync([FromRoute] Guid department)
    {
        // var user = GetUserFromToken();
        var departmentEntity = await _adminService.DeleteDepartmentAsync(department);
        if (departmentEntity == null) return BadRequest("Department not deleted");
        return StatusCode(200, new ApiDataResponse<DepartmentResDto>(departmentEntity, 200, "Department deleted successfully"));
    }

    [HttpPost("teacher/register")]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<TeacherResponseDto>>>> RegisterTeacherAsync([FromBody] IReadOnlyList<TeacherCreateDto> teachers)
    {
        // var user = GetUserFromToken();
        var teacherEntities = await _adminService.RegisterTeacherAsync(teachers);
        if (teacherEntities == null) return BadRequest("Teacher not created");
        return StatusCode(200, new ApiDataResponse<IReadOnlyList<TeacherResponseDto>>(teacherEntities, 201, "Teacher Created successfully"));
    }
    
    [HttpPatch("teacher/{teacher}")]
    public async Task<ActionResult<ApiDataResponse<TeacherResponseDto>>> UpdateTeacherAsync([FromRoute] Guid teacher, [FromBody] TeacherUpdateDto teacherUpdateDto)
    {
        // var user = GetUserFromToken();
        var teacherEntity = await _adminService.UpdateTeacherAsync(teacher, teacherUpdateDto);
        if (teacherEntity == null) return BadRequest("Teacher not updated");
        return StatusCode(200, new ApiDataResponse<TeacherResponseDto>(teacherEntity, 200, "Teacher updated successfully"));
    }


    private UserFromToken? GetUserFromToken()
    {
        if (!Request.Headers.ContainsKey("Authorization"))
        {
            throw new UnAuthorizedException();
        }
        var _user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        if(_user.Role != "Admin")
        {
            throw new UnAuthorizedException();
        }
        return _user;
    }
}