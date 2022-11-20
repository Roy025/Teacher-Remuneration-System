using System.ComponentModel.DataAnnotations;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

[Index(nameof(DepartmentId), nameof(Code), IsUnique = true)]
public class Course : BaseEntity
{
    public Guid DepartmentId { get; set; }
    public Department? Department { get; set; } = null!;
    [MinLength(6), MaxLength(7)]
    public string Code { get; set; }
    public string Title { get; set; }
    public Decimal Credit { get; set; }
    public string Type { get; set; } // Theory or Lab
    public string? Level { get; set; } = "Undergrad";
}
