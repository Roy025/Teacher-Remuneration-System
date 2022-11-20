using Core.DTOs.CourseDTOs;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;

namespace Core.Interfaces.Services;
public interface IAdminService
{
    Task<Institute> CreateInstituteAsync(InstituteDto institute);
    Task<Institute> DeleteInstituteAsync(Guid institute);
    Task<DepartmentResDto> CreateDepartmentAsync(DepartmentCreateDto department);
    Task<DepartmentResDto> DeleteDepartmentAsync(Guid department);
    Task<IReadOnlyList<TeacherResponseDto>> RegisterTeacherAsync(IReadOnlyList<TeacherCreateDto> teachers);
    Task<TeacherResponseDto> UpdateTeacherAsync(Guid teacher, TeacherUpdateDto teacherUpdateDto);
    Task<TeacherResponseDto> DeleteTeacherAsync(Guid teacher);
    Task<Admin> Register(AdminRegisterDTO adminRegisterDTO);
    Task<AdminLoginResDto> Login(AdminLoginDTO adminLoginDTO);
    Task<IReadOnlyList<CourseResponseDto>> CreateCourseAsync(IReadOnlyList<CourseCreateDto> courses);
    Task<CourseResponseDto> DeleteCourseAsync(Guid course);

}
