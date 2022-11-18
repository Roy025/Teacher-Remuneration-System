namespace Core.DTOs.TeacherDTOs;
public class TeacherCreateDto
{
    public string? Name { get; set; } = null;
    public string Email { get; set; }
    public string Password { get; set; }
    public Guid Department { get; set; }
    public string? BankAccount { get; set; } = null;
    public string Designation { get; set; } = "Lecturer";
    public string? Image { get; set; }
}
