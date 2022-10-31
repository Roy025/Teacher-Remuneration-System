using Core.DTOs.TeacherDTOs;
using Core.Interfaces.Services;
using Core.Models;
using Core.Params;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
public class TeacherContoller : BaseApiController
{
    private readonly ILogger<TeacherContoller> _logger;
    private readonly ITeacherService _teacherService;

    public TeacherContoller(ILogger<TeacherContoller> logger, ITeacherService teacherService)
    {
        _logger = logger;
        _teacherService = teacherService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<TeacherResponseDto>>>> GetTeachers([FromQuery] TeacherReqParams teacherParams)
    {
        var teachers = await _teacherService.GetTeachersAsync(teacherParams);

        return StatusCode(200, new ApiDataResponse<IReadOnlyList<TeacherResponseDto>>(teachers, 200, "Teachers fetched successfully"));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ApiDataResponse<TeacherResponseDto>>> GetTeacherById(Guid id)
    {
        var teacher = await _teacherService.GetTeacherByIdAsync(id);

        return StatusCode(200, new ApiDataResponse<TeacherResponseDto>(teacher, 200, "Teacher fetched successfully"));
    }

    // [HttpPost] public async Task<Ac>
}