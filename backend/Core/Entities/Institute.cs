namespace Core.Entities;
public class Institute : BaseEntity
{
    public string Name { get; set; }
    
    public string? ShortName { get; set; } = null!;
    public ICollection<Department> Departments { get; set; } = new List<Department>();
}
