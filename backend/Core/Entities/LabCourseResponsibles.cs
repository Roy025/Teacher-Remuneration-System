using Microsoft.EntityFrameworkCore;

namespace Core.Entities;


// [Index(nameof(ExamId), nameof(CourseId), IsUnique = true)]
public class LabCourseResponsibles : BaseEntity
{
    // Chairman's responsibility
    public Guid ExamId { get; set; }
    public Exam? Exam { get; set; }
    public Guid CourseId { get; set; }
    public Course? Course { get; set; }
    public Guid? ExaminerId { get; set; }
    public Teacher? Examiner { get; set; }
    public Guid? TabulatorId { get; set; }
    public Teacher? Tabulator { get; set; }
    public Guid? VivaExaminerId { get; set; }
    public Teacher? VivaExaminer { get; set; }
    public int? NumberOfRegisteredStudents { get; set; } = null;
    /////////////////////////////////////////////

    // Teacher Invigilator's responsibility
    public int? NumberOfExaminee { get; set; } = null;
    public int? NumberOfVivaParticipants { get; set; } = null;

}
