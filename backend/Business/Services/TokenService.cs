using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Core.Entities;
using Core.Interfaces.Services;
using Core.Models;
using Core.Utils;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Business.Services;
public class TokenService : ITokenService
{
    private readonly IConfiguration _config;
    private readonly SymmetricSecurityKey _key;

    public TokenService(IConfiguration config)
    {
        _config = config;
        _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"]));
    }

    public string CreateToken(Teacher teacher)
    {
        var claims = new List<Claim>
        {
            new("email", teacher.Email),
            new("userId", teacher.Id.ToString()),
            new("role", teacher.Role),
            new("departmentId", teacher.DepartmentId.ToString()),
        };
        var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.Now.AddDays(100),
            SigningCredentials = creds,
            Issuer = _config["Token:Issuer"]
        };
        var tokenHandler = new JwtSecurityTokenHandler();

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }

    public string CreateToken(Admin admin)
    {
        var claims = new List<Claim>
        {
            new("email", admin.Email),
            new("userId", admin.Id.ToString()),
            new("role", admin.Role),
        };
        var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.Now.AddDays(100),
            SigningCredentials = creds,
            Issuer = _config["Token:Issuer"]
        };
        var tokenHandler = new JwtSecurityTokenHandler();

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }

    // extract the user from the token
    public UserFromToken GetUserFromToken(string authHeader)
    {
        try

        {
            string token = authHeader.Split(" ")[1];
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenObj = tokenHandler.ReadJwtToken(token);
            var user = new UserFromToken
            {
                Email = tokenObj.Claims.First(c => c.Type == "email").Value,
                UserId = Guid.Parse(tokenObj.Claims.First(c => c.Type == "userId").Value),
                Role = tokenObj.Claims.First(c => c.Type == "role").Value,
                DepartmentId = Guid.Parse(tokenObj.Claims.First(c => c.Type == "departmentId").Value),
            };
            System.Console.WriteLine(user.Email);
            System.Console.WriteLine(user.UserId);
            System.Console.WriteLine(user.Role);
            System.Console.WriteLine(user.DepartmentId);
            return user;
        }
        catch (Exception e)
        {

            throw new UnAuthorizedException();
        }
    }

    

    // private string GetTokenFromRequest(string authHeader)
    // {
    //     if (string.IsNullOrEmpty(authHeader) || !authHeader.StartsWith("Bearer "))
    //         return null;
    //     return authHeader.Substring(7);
    // }

}
