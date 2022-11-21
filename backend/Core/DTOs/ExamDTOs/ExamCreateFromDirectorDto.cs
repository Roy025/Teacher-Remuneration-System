using Core.DTOs.CourseDTOs;
using Core.DTOs.TeacherDTOs;

namespace Core.DTOs.ExamDTOs;
public class ExamCreateFromDirectorDto
{
    public string Session { get; set; }
    public string Semester { get; set; }
    public TeacherResponseDto Chairman { get; set; }
    public TeacherResponseDto CheifInvigilator { get; set; }
    public ICollection<TeacherResponseDto> Members { get; set; } = new List<TeacherResponseDto>();
    public ICollection<CourseFromDirectorDto> Courses { get; set; } = new List<CourseFromDirectorDto>();
}
