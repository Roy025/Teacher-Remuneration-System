using Core.DTOs.CourseDTOs;
using Core.DTOs.TeacherDTOs;

namespace Core.DTOs.ExamDTOs;
public class TermPaperDto
{
    public CourseForExamDto Course { get; set; }
    public ICollection<TeacherResponseDto> Supervisors { get; set; } = new List<TeacherResponseDto>();
    public ICollection<TeacherResponseDto> Examiners { get; set; } = new List<TeacherResponseDto>();
    public Boolean IsIncludedInExamCommittee { get; set; } = false;
}
