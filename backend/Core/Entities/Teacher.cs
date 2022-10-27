namespace Core.Entities;
public class Teacher : BaseEntity
{
    public string Name { get; set; }
    public string Institute { get; set; }
    public string Department { get; set; }
    public string BankAccount { get; set; } = null!;
    public string Designation { get; set; } = "Lecturer";
    public string? Image { get; set; } = null!;
    public ICollection<Project> Projects { get; set; } = new List<Project>();
}