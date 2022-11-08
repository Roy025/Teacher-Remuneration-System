using Microsoft.EntityFrameworkCore;

namespace Core.Entities;

[Index(nameof(Department), nameof(Session), nameof(Semester), IsUnique = true)]
public class Exam : BaseEntity
{
    public string Department { get; set; }
    public string Session { get; set; } = null!; // 2018-19, 2019-20, 2020-21
    public string Semester { get; set; } = null!; // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th
    public Guid ChairmanId { get; set; }
    public Teacher? Chairman { get; set; }
    public Guid CheifInvigilatorId { get; set; }
    public Teacher? CheifInvigilator { get; set; }
    ICollection<Teacher> Members { get; set; } = new List<Teacher>();
    ICollection<TheoryCourseResponsibles> TheoryCourses { get; set; } = new List<TheoryCourseResponsibles>();
    ICollection<LabCourseResponsibles> LabCourses { get; set; } = new List<LabCourseResponsibles>();
}
