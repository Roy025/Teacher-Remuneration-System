using Core.DTOs.TeacherDTOs;

namespace Core.DTOs.ExamDTOs;
public class ExamUpdateFromChairmanDto
{
    public string Session { get; set; }
    public string Semester { get; set; }
    public ICollection<TeacherCoursePairDto>? QuestionSetters { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? QuestionModerators { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? AnswerpaperCheckersPartA { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? AnswerpaperCheckersPartB { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? TermTestAnswerCheckers { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? LabExaminers { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? Tabulators { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? VivaExaminers { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? ScrutinizersPartA { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? ScrutinizersPartB { get; set; } = null;
    public ICollection<TeacherCoursePairDto>? QuestionTypers { get; set; } = null;
    public ICollection<TeacherResponseDto>? Invigilators { get; set; } = null;
    public ICollection<TermPaperDto>? TermPaperData { get; set; } = null;
    public ICollection<CourseNumberOfStdntsPair>? regisretedStudents { get; set; } = null;
}
