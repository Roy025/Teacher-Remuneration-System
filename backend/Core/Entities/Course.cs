using Core.Entities;
using Microsoft.EntityFrameworkCore;

[Index(nameof(Department), nameof(Code), IsUnique = true)]
public class Course : BaseEntity
{
    public string Department { get; set; }
    public string Code { get; set; }
    public string Title { get; set; }
    public Decimal Credit { get; set; }
}
