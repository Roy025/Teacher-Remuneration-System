namespace Core.Params;
public class ExamReqParams
{
    public string Semester { get; set; } = null;
    public string Session { get; set; } = null;
    public Guid? DepartmentId { get; set; } = null;
    public Guid? TeacherId { get; set; } = null;
}
