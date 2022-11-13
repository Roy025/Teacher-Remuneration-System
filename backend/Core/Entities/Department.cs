namespace Core.Entities;
public class Department : BaseEntity
{
    public string Name { get; set; }

    public string? ShortName { get; set; } = null!;
    public Guid InstituteId { get; set; }
    public Institute? Institute { get; set; } = null!;
    public ICollection<Course> Courses { get; set; } = new List<Course>();
    public ICollection<Teacher> Teachers { get; set; } = new List<Teacher>();
}