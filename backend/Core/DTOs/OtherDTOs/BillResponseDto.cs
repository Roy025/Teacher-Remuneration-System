using Microsoft.Extensions.Localization;

namespace Core.DTOs.OtherDTOs;
public class BillResponseDto
{
    public BillRow QSetting { get; set; }
    public BillRow QMod { get; set; }
    public BillRow AnsCheck { get; set; }
    public BillRow TermTest { get; set; }
    public BillRow Practical { get; set; }
    public BillRow Tabulation { get; set; }
    public BillRow Viva { get; set; }
    public BillRow Scrutiny { get; set; }
    public BillRow EcmMember { get; set; }
    public BillRow QTyping { get; set; }
    public BillRow Invi { get; set; }
    public BillRow TermPaper { get; set; }
}

public class BillRow
{
    public string Criteria { get; set; }  
    public ICollection<string> Courses { get; set; } = new List<string>();
    public Double Amount { get; set; } = 0;
}

public class BillParams
{
    public string? Semester { get; set; } = null;
    public string? Session { get; set; } = null;
    public Guid? TeacherId { get; set; } = null;
}