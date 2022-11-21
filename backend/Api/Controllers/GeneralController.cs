using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.CourseDTOs;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Services;
using Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("api")]
public class GeneralController : ControllerBase
{
    private readonly IGeneralService _generalService;
    public GeneralController(IGeneralService generalService)
    {
        _generalService = generalService;
    }

    [HttpGet("institute")]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<Institute>>>> GetInstituteAsync()
    {
        var institutes = await _generalService.GetAllInstituteAsync();
        if (institutes == null) return BadRequest("Institutes not found");
        return StatusCode(200, new ApiDataResponse<IReadOnlyList<Institute>>(institutes, 200, "Institutes found successfully"));
    }

    [HttpGet("department")]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<DepartmentResDto>>>> GetDepartmentAsync([FromQuery]Guid institute)
    {
        var departments = await _generalService.GetAllDepartmentAsync(institute);
        if (departments == null) return BadRequest("Departments not found");
        return StatusCode(200, new ApiDataResponse<IReadOnlyList<DepartmentResDto>>(departments, 200, "Departments found successfully"));
    }

    [HttpGet("teacher")]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<TeacherResponseDto>>>> GetTeacherAsync([FromQuery]Guid department)
    {
        var teachers = await _generalService.GetAllTeacherAsync(department);
        if (teachers == null) return BadRequest("Teachers not found");
        return StatusCode(200, new ApiDataResponse<IReadOnlyList<TeacherResponseDto>>(teachers, 200, "Teachers found successfully"));
    }

    [HttpGet("course")]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<CourseResponseDto>>>> GetCourseAsync([FromQuery]Guid department)
    {
        var courses = await _generalService.GetAllCourseAsync(department);
        if (courses == null) return BadRequest("Courses not found");
        return StatusCode(200, new ApiDataResponse<IReadOnlyList<CourseResponseDto>>(courses, 200, "Courses found successfully"));
    }

    [HttpGet("student")]
    public async Task<ActionResult<ApiDataResponse<IReadOnlyList<Student>>>> GetStudentAsync([FromQuery]Guid department)
    {
        var students = await _generalService.GetAllStudentAsync(department);
        if (students == null) return BadRequest("Students not found");
        return StatusCode(200, new ApiDataResponse<IReadOnlyList<Student>>(students, 200, "Students found successfully"));
    }
}