using Microsoft.EntityFrameworkCore;

namespace Core.Entities;


[Index(nameof(ExamId), nameof(CourseId), IsUnique = true)]
public class Project : BaseEntity
{
    // Chairman's responsibility
    public Guid ExamId { get; set; }
    public Exam Exam { get; set; }
    public Guid CourseId { get; set; }
    public Course Course { get; set; }
    public ICollection<Teacher> Examiners { get; set; } = new List<Teacher>();
    public int? NumberOfRegisteredStudents { get; set; } = null;
    /////////////////////////////////////////////

    // Cheif Invigilator's responsibility
    public int? NumberOfExaminee { get; set; } = null;
}
