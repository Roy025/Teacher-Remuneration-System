using Core.DTOs.CourseDTOs;
using Core.DTOs.TeacherDTOs;

namespace Core.DTOs.ExamDTOs;
public class TeacherCoursePairDto
{
    public CourseForExamDto Course { get; set; }
    public TeacherResponseDto Teacher { get; set; }
}
