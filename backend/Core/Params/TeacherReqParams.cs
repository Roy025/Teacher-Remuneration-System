namespace Core.Params;
public class TeacherReqParams
{
    private string? _institute;
    public string? Institute
    {
        get => _institute;
        set => _institute = value.ToLower();
    }
    
    private string? _department;
    public string? Department
    {
        get => _department;
        set => _department = value.ToLower();
    }
    public string? Email { get; set; } = null;
}
