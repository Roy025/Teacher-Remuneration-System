using Microsoft.EntityFrameworkCore;

namespace Core.Entities;
[Index(nameof(ExamId), nameof(CourseId), IsUnique = true)]
public class CourseResponsibles : BaseEntity
{
    // Chairman's responsibility
    public Guid ExamId { get; set; }
    public Exam Exam { get; set; }
    public Guid CourseId { get; set; }
    public Course Course { get; set; }
    public Guid? QuestionSetterPartAId { get; set; } = null;
    public Teacher? QuestionSetterPartA { get; set; } = null;
    public Guid? QuestionSetterPartBId { get; set; } = null;
    public Teacher? QuestionSetterPartB { get; set; } = null;
    public Guid? QuestionExaminerPartAId { get; set; } = null;
    public Teacher ?QuestionExaminerPartA { get; set; } = null;
    public Guid? QuestionExaminerPartBId { get; set; } = null;
    public Teacher? QuestionExaminerPartB { get; set; } = null;
    public Guid? QuestionScrutinizerPartAId { get; set; } = null;
    public Teacher? QuestionScrutinizerPartA { get; set; } = null;
    public Guid? QuestionScrutinizerPartBId { get; set; } = null;
    public Teacher? QuestionScrutinizerPartB { get; set; } = null;
    public int? NumberOfRegisteredStudents { get; set; } = null;
    /////////////////////////////////////////////
    
    // Cheif Invigilator's responsibility
    public int? NumberOfExaminee { get; set; } = null;
    /////////////////////////////////////////////
}
