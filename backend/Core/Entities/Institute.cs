using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities;
[Index(nameof(Name), IsUnique = true)]
public class Institute : BaseEntity
{
    public string Name { get; set; }
    
    public string? ShortName { get; set; } = null!;
    [JsonIgnore]
    public ICollection<Department> Departments { get; set; } = new List<Department>();
}
