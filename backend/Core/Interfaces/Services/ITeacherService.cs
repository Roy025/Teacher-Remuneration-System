using Core.DTOs.TeacherDTOs;
using Core.Params;

namespace Core.Interfaces.Services;
public interface ITeacherService
{
    Task<IReadOnlyList<TeacherResponseDto>>GetTeachersAsync(TeacherReqParams teacherParams);
    Task<TeacherResponseDto> GetTeacherByIdAsync(Guid id);
    Task<TeacherResponseDto> CreateTeacherAsync(TeacherCreateDto teacher);
    Task<TeacherResponseDto> UpdateTeacherAsync(Guid id, TeacherUpdateDto teacher);
}