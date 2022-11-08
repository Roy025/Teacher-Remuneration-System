namespace Core.DTOs.TeacherDTOs;
public class TeacherUpdateDto
{
    public string? Name { get; set; } = null!;
    public string? Email { get; set; } = null!;
    public string? Password { get; set; } = null!;
    public string? BankAccount { get; set; } = null!;
    public string? Designation { get; set; } = null;
}
