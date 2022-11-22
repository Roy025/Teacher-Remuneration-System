namespace Core.Entities;
public class TermPaperResponsibilities : BaseEntity
{
    public Guid CourseId { get; set; }
    public Course Course { get; set; }
    public ICollection<Teacher> Supervisors { get; set; } = new List<Teacher>();
    public ICollection<Teacher> Examiner { get; set; } = new List<Teacher>();
    public Boolean IsIncludedInExamCommittee { get; set; } = false;

}