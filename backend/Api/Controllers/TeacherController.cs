using Core.DTOs.TeacherDTOs;
using Core.Interfaces.Services;
using Core.Models;
using Core.Params;
using Core.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
public class TeacherController : BaseApiController
{
    // private readonly ILogger<TeacherContoller> _logger;
    private readonly ITeacherService _teacherService;
    private readonly ITokenService _tokenService;

    public TeacherController(ITeacherService teacherService, ITokenService tokenService)
    {
        _tokenService = tokenService;
        _teacherService = teacherService;
    }

    // [HttpGet]
    // public async Task<ActionResult<ApiDataResponse<IReadOnlyList<TeacherResponseDto>>>> GetTeachers([FromQuery] TeacherReqParams teacherParams)
    // {
    //     var teachers = await _teacherService.GetTeachersAsync(teacherParams);

    //     return StatusCode(200, new ApiDataResponse<IReadOnlyList<TeacherResponseDto>>(teachers, 200, "Teachers fetched successfully"));
    // }

    [HttpGet("{id}")]
    public async Task<ActionResult<ApiDataResponse<TeacherOwnResponseDto>>> GetTeacherById(Guid id)
    {
        // var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        // if (user == null) return StatusCode(401, new ApiDataResponse<TeacherResponseDto>(null, 401, "Unauthorized"));
        var teacher = await _teacherService.GetTeacherByIdAsync(id);

        return StatusCode(200, new ApiDataResponse<TeacherOwnResponseDto>(teacher, 200, "Teacher fetched successfully"));
    }

    
    [HttpPost("login")]
    public async Task<ActionResult<ApiDataResponse<TeacherLoginDto>>> LoginTeacher(TeacherLoginReqDto teacher)
    {
        var teacherEntity = await _teacherService.LoginTeacherAsync(teacher);

        if (teacherEntity == null) return StatusCode(400, new BadRequestException("Teacher login failed"));

        return StatusCode(200, new ApiDataResponse<TeacherLoginDto>(teacherEntity, 200, "Teacher logged in successfully"));
    }
    [HttpPatch("{id}")]
    public async Task<ActionResult<ApiDataResponse<TeacherResponseDto>>> UpdateTeacher(Guid id, TeacherOwnUpdateDto teacher)
    {
        // var user = GetUserFromToken();

        // if(user.UserId != id) throw new UnAuthorizedException();
        
        var teacherEntity = await _teacherService.UpdateTeacherAsync(id, teacher);

        if (teacherEntity == null) return StatusCode(400, new BadRequestException("Teacher update failed"));

        return StatusCode(200, new ApiDataResponse<TeacherResponseDto>(teacherEntity, 200, "Teacher updated successfully"));
    }

    private UserFromToken? GetUserFromToken()
    {
        if (!Request.Headers.ContainsKey("Authorization"))
        {
            throw new UnAuthorizedException();
        }
        var _user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        return _user;
    }
}
