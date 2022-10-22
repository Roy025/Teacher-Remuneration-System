using Microsoft.EntityFrameworkCore;

namespace Core.Entities;

[Index(nameof(ExamId), nameof(MemberId),  IsUnique = true)]
public class ExamCommittee : BaseEntity
{
    // public string Department { get; set; }
    // public string Session { get; set; } = null!; // 2018-19, 2019-20, 2020-21
    // public string Semester { get; set; } = null!; // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th
    public Guid ExamId { get; set; }
    public Exam Exam { get; set; }
    public Guid MemberId { get; set; }
    public Teacher Member { get; set; }
    public string MemberRole { get; set; } // Chairman, Member, Tabulator, External
}
