using Core.DTOs.ExamDTOs;
using Core.Models;
using Core.Params;

namespace Core.Interfaces.Services;
public interface IExamService
{
    // Task<IEnumerable<string>> GetSemestersBySessionForDirector(string session, UserFromToken user);
    Task<ExamResponseDtoDirector> GetExamsForDirectorAsync(ExamReqParams examParams, UserFromToken user);
    Task<ExamResponseDtoDirector> CreateExamsFromDirector(ExamCreateFromDirectorDto examCreateFromDirectorDto, UserFromToken user);
    Task<IEnumerable<string>> GetExamSessionsForChairman(ExamReqParams examReqParams, UserFromToken user);

}
