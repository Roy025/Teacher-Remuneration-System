namespace Core.Params;
public class TeacherReqParams
{
    private string? _institute;
    public string? Institute
    {
        get => _institute;
        set => _institute = value.ToLower();
    }
    
    public Guid? DepartmentId { get; set; } = null;
    public string? Email { get; set; } = null;
}
