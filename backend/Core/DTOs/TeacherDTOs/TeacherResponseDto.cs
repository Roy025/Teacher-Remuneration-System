namespace Core.DTOs.TeacherDTOs;
public class TeacherResponseDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Institute { get; set; }
    public string Department { get; set; }
    public string Designation { get; set; }
    public string? Image { get; set; } = null!;
}
