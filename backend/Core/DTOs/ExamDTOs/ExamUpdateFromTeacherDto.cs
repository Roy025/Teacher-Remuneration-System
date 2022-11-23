using Core.Entities;

namespace Core.DTOs.ExamDTOs;
public class ExamUpdateFromTeacherDto
{
    public string Session { get; set; }
    public string Semester { get; set; }
    public Department Department { get; set; }
    public IReadOnlyList<CourseNumberOfStdntsPair>? TermTestData { get; set; } = new List<CourseNumberOfStdntsPair>();
    public IReadOnlyList<CourseNumberOfStdntsPair>? AnswerPaperCheckingDataPartA { get; set; } = new List<CourseNumberOfStdntsPair>();

    public IReadOnlyList<CourseNumberOfStdntsPair>? AnswerPaperCheckingDataPartB { get; set; } = new List<CourseNumberOfStdntsPair>();

    public IReadOnlyList<CourseNumberOfStdntsPair>? ScrutinyDataPartA { get; set; } = new List<CourseNumberOfStdntsPair>();
    public IReadOnlyList<CourseNumberOfStdntsPair>? ScrutinyDataPartB { get; set; } = new List<CourseNumberOfStdntsPair>();
    public IReadOnlyList<CourseNumberOfStdntsPair>? PracticalExamData { get; set; } = new List<CourseNumberOfStdntsPair>();
    public IReadOnlyList<CourseNumberOfStdntsPair>? VivaExamData { get; set; } = new List<CourseNumberOfStdntsPair>();
}
