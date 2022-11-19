using Core.Entities;
using Core.Models;

namespace Core.Interfaces.Services;
public interface ITokenService
{
    string CreateToken(Teacher teacher);
    string CreateToken(Admin admin);
    UserFromToken GetUserFromToken(string authHeader);
}
