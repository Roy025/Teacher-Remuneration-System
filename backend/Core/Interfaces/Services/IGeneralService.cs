using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;

namespace Core.Interfaces.Services;
public interface IGeneralService
{
    Task<IReadOnlyList<Institute>> GetAllInstituteAsync();
    Task<IReadOnlyList<DepartmentResDto>> GetAllDepartmentAsync(Guid institute);
    Task<IReadOnlyList<TeacherResponseDto>> GetAllTeacherAsync(Guid department);

}
