namespace Core.Entities;
public class TermPaperResponsibilities : BaseEntity
{
    public Guid CourseId { get; set; }
    public Course Course { get; set; }
    public Guid? TabulatorId { get; set; } = null;
    public Teacher? Tabulator { get; set; } = null;
    public ICollection<Teacher> Supervisors { get; set; } = new List<Teacher>();
    public ICollection<Teacher> Examiners { get; set; } = new List<Teacher>();
    public Boolean IsIncludedInExamCommittee { get; set; } = false;
    public int? NumberOfRegisteredStudents { get; set; } = null;

}