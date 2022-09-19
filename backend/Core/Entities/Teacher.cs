namespace Core.Entities;
public class Teacher : BaseEntity
{
    public string Name { get; set; }
    public string Department { get; set; }
    public string BankAccount { get; set; } = null!;
    public string Designation { get; set; } = "Lecturer";
}