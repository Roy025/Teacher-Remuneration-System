using Core.DTOs.OtherDTOs;
using Core.Interfaces.Services;
using Core.Models;
using Core.Utils;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;
public class BillController : BaseApiController
{
    private readonly IBillService _billService;
    private readonly ITokenService _tokenService;
    public BillController(IBillService billService, ITokenService tokenService)
    {
        _tokenService = tokenService;
        _billService = billService;
    }

    [HttpGet]
    public async Task<ActionResult<ApiDataResponse<BillResponseDto>>> GetBill([FromQuery]BillParams billParams)
    {
        var user = GetUserFromToken();
        var bill = await _billService.GetBillAsync(billParams, user);
        return StatusCode(200, new ApiDataResponse<BillResponseDto>(bill, 200, "Bill"));
    }



    private UserFromToken? GetUserFromToken()
    {
        if (!Request.Headers.ContainsKey("Authorization"))
        {
            throw new UnAuthorizedException();
        }
        try
        {
            var _user = _tokenService.GetUserFromToken(Request.Headers["Authorization"]);
            return _user;
        }
        catch (Exception e)
        {
            throw new UnAuthorizedException();
        }
    }
}
