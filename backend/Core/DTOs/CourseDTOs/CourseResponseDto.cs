namespace Core.DTOs.CourseDTOs;
public class CourseResponseDto
{
    public Guid Id { get; set; }
    public string Code { get; set; }
    public string Title { get; set; }
    public Decimal Credit { get; set; }
    public string Type { get; set; } // Theory or Lab
    public string Level { get; set; }
}
