namespace Core.Entities;
public class Teacher : BaseEntity
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Institute { get; set; }
    public string Department { get; set; }
    public string BankAccount { get; set; } = null!;
    public string Designation { get; set; } = "Lecturer";
    public string? Image { get; set; } = null!;
}