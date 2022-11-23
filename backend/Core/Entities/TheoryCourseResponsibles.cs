using Microsoft.EntityFrameworkCore;

namespace Core.Entities;
[Index(nameof(ExamId), nameof(CourseId), IsUnique = true)]
public class TheoryCourseResponsibles : BaseEntity
{
    // Chairman's responsibility
    public Guid ExamId { get; set; }
    public Exam Exam { get; set; }
    public Guid CourseId { get; set; }
    public Course Course { get; set; }
    public Guid? QuestionModeratorId { get; set; } = null;
    public Teacher? QuestionModerator { get; set; } = null;
    public Guid? AnswerPaperCheckerPartAId { get; set; } = null;
    public Teacher? AnswerPaperCheckerPartA { get; set; } = null;
    public Guid? AnswerPaperCheckerPartBId { get; set; } = null;
    public Teacher? AnswerPaperCheckerPartB { get; set; } = null;
    public Guid? TermTestAnswerCheckerId { get; set; } = null;
    public Teacher? TermTestAnswerChecker { get; set; } = null;
    public Guid? TabulatorId { get; set; } = null;
    public Teacher? Tabulator { get; set; } = null;
    public Guid? QuestionScrutinizerPartAId { get; set; } = null;
    public Teacher? QuestionScrutinizerPartA { get; set; } = null;
    public Guid? QuestionScrutinizerPartBId { get; set; } = null;
    public Teacher? QuestionScrutinizerPartB { get; set; } = null;
    public Guid? QuestionTyperId { get; set; } = null;
    public Teacher? QuestionTyper { get; set; } = null;
    public int? NumberOfRegisteredStudents { get; set; } = 0!;
    // public Guid? QuestionSetter1Id { get; set; } = null;
    // public Teacher? QuestionSetter1 { get; set; } = null;
    // public Guid? QuestionSetter2Id { get; set; } = null;
    // public Teacher? QuestionSetter2 { get; set; } = null;
    public ICollection<Teacher>? QuestionSetters { get; set; } = new List<Teacher>();
    
    /////////////////////////////////////////
    /////////////////////////////////////////////
    
    // Teacher Invigilator's responsibility
    public int? NumberOfExamineePartA { get; set; } = null;
    public int? NumberOfExamineePartB { get; set; } = null;
    public int? NumberOfTermTestParticipants { get; set; } = 0;
    public int? NumberOfVivaParticipants { get; set; } = null;
    public int? NumberOfStudentsScrutinizedPartA { get; set; } = null;
    public int? NumberOfStudentsScrutinizedPartB { get; set; } = null;
    public int? NumberOfPracticalExamParticipants { get; set; } = null;
    /////////////////////////////////////////////
}
