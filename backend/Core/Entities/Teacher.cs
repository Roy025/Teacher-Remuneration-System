using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities;
public class Teacher : BaseEntity
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Institute { get; set; }
    public Guid DepartmentId { get; set; }
    public Department? Department { get; set; }
    public string? BankAccount { get; set; } = null!;
    public string Designation { get; set; } = "Lecturer";
    public string? Image { get; set; } = null!;
    public ICollection<Exam> Exams { get; set; } = new List<Exam>();
    // [ForeignKey("Chairman")]
    public ICollection<Exam> ChairmanOfExams { get; set; } = new List<Exam>();
    public ICollection<Exam> ChiefInvigilatorOfExams { get; set; } = new List<Exam>();
}