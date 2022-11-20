using Core.DTOs.TeacherDTOs;
using Core.Params;

namespace Core.Interfaces.Services;
public interface ITeacherService
{
    Task<IReadOnlyList<TeacherResponseDto>>GetTeachersAsync(TeacherReqParams teacherParams);
    Task<TeacherResponseDto> GetTeacherByIdAsync(Guid id);
    Task<TeacherLoginDto> CreateTeacherAsync(TeacherCreateDto teacher);
    Task<TeacherLoginDto> LoginTeacherAsync(TeacherLoginReqDto teacher);
    Task<TeacherResponseDto> UpdateTeacherAsync(Guid id, TeacherOwnUpdateDto teacher);
}
