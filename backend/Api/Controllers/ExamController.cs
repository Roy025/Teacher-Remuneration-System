using Core.DTOs.ExamDTOs;
using Core.Interfaces.Services;
using Core.Models;
using Core.Params;
using Core.Utils;
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

    // Director Section
    [HttpGet("/director")]
    public async Task<ActionResult<ApiDataResponse<ExamResponseDtoDirector>>> GetExamsForDirector([FromQuery] ExamReqParams examParams)
    {
        if (!Request.Headers.ContainsKey("Authorization"))
        {
            throw new UnAuthorizedException();
        }
        var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        var exam = await _examService.GetExamsForDirectorAsync(examParams, user);
        return StatusCode(200, new ApiDataResponse<ExamResponseDtoDirector>(exam, 200, "Exams fetched successfully"));
    }
    
    [HttpPost("/director")]
    public async Task<ActionResult<ApiDataResponse<ExamResponseDtoDirector>>> CreateExamsFromDirector([FromBody] ExamCreateFromDirectorDto examCreateFromDirectorDto)
    {
        if (!Request.Headers.ContainsKey("Authorization"))
        {
            throw new UnAuthorizedException();
        }
        var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        var exams = await _examService.CreateExamsFromDirector(examCreateFromDirectorDto, user);

        return StatusCode(200, new ApiDataResponse<ExamResponseDtoDirector>(exams, 200, "Exams created successfully"));
        // throw new NotImplementedException();
    }
    //////////////////////////////////

    // Chairman Section
    [HttpGet("/chairman")]
    public Task<ActionResult<ApiDataResponse<IEnumerable<string>>>> GetExamSessionsForChairman([FromQuery] ExamReqParams examReqParams)
    {
        if (!Request.Headers.ContainsKey("Authorization"))
        {
            throw new UnAuthorizedException();
        }
        var user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
        var sessions = _examService.GetExamSessionsForChairman(examReqParams, user);

        throw new NotImplementedException();
    }
}
