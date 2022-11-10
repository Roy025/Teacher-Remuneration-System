using Core.DTOs.ExamDTOs;
using Core.Interfaces.Services;
using Core.Models;
using Core.Params;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
public class ExamController : BaseApiController
{
    private readonly IExamService _examService;
    private readonly ITokenService _tokenService;
    public ExamController(IExamService examService, ITokenService tokenService)
    {
        _tokenService = tokenService;
        _examService = examService;
    }
    //get semester list by session
    // [HttpGet("/director/session/{session}")]
    // public async Task<ActionResult<ApiDataResponse<IEnumerable<string>>>> GetSemestersBySession(string session)
    // {
    //     var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
    //     var semesters = await _examService.GetSemestersBySessionForDirector(session, user);
    //     return StatusCode(200, new ApiDataResponse<IEnumerable<string>>(semesters, 200, "Semesters fetched successfully"));
    // }
    [HttpGet("/director")]
    public async Task<ActionResult<ApiDataResponse<ExamResponseDtoDirector>>> GetExamsForDirector([FromQuery] ExamReqParams examParams)
    {
        var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        var exam = await _examService.GetExamsForDirectorAsync(examParams, user);
        return StatusCode(200, new ApiDataResponse<ExamResponseDtoDirector>(exam, 200, "Exams fetched successfully"));
    }
    [HttpPost("/director")]
    public Task<ActionResult<ApiDataResponse<IEnumerable<ExamResponseDtoDirector>>>> CreateExamsFromDirector([FromBody] ExamCreateFromDirectorDto examCreateFromDirectorDto)
    {
        var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        var exams = _examService.CreateExamsFromDirector(examCreateFromDirectorDto, user);

        throw new NotImplementedException();
    }

}
