using Core.Entities;

public class Course : BaseEntity
{
    public string Code { get; set; }
    public string Title { get; set; }
    public Decimal Credit { get; set; }
    public string Department { get; set; }
}
