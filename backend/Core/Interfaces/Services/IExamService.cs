using Core.DTOs.CourseDTOs;
using Core.DTOs.ExamDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Models;
using Core.Params;

namespace Core.Interfaces.Services;
public interface IExamService
{
    // Task<IEnumerable<string>> GetSemestersBySessionForDirector(string session, UserFromToken user);
    Task<ExamResponseDtoDirector> GetExamsForDirectorAsync(ExamReqParams examParams, UserFromToken user);
    Task<ExamResponseDtoDirector> CreateExamsFromDirector(ExamCreateFromDirectorDto examCreateFromDirectorDto, UserFromToken user);
    Task<IEnumerable<string>> GetExamSessionsForChairman(ExamReqParams examReqParams, UserFromToken user);
    Task<IReadOnlyList<CourseForExamDto>> GetCoursesForChairman (ExamReqParams examParams, UserFromToken user);
    Task<IReadOnlyList<TeacherResponseDto>> GetTeachersForChairman(ExamReqParams examParams, UserFromToken user);
    Task<ExamResponseDtoChairman> UpdateExamFromChairman(ExamUpdateFromChairmanDto examUpdateFromChairmanDto, UserFromToken user);
    Task<ExamUpdateFromTeacherDto> UpdateExamFromTeacher(ExamUpdateFromTeacherDto examUpdateFromTeacher, UserFromToken user);
    Task<ExamResponseDtoChairman> GetExamsForChairmanAsync(ExamReqParams examParams, UserFromToken user);

}
