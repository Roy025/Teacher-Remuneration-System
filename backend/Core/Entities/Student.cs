namespace Core.Entities;
public class Student : BaseEntity
{
    public string? Name { get; set; } = null;
    public string RegistraionNo { get; set; }
    public Guid DepartmentId { get; set; }
    public Department? Department { get; set; } = null;
}