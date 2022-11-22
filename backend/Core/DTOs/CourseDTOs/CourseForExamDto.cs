namespace Core.DTOs.CourseDTOs;
public class CourseForExamDto
{
    public Guid Id { get; set; }
    public string Code { get; set; }
    public string? Title { get; set; } = null;
    public Guid? DepartmentId { get; set; } = null;
}
