using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Core.Entities;

[Index(nameof(DepartmentId), nameof(Session), nameof(Semester), IsUnique = true)]
public class Exam : BaseEntity
{
    public Guid DepartmentId { get; set; }
    public Department? Department { get; set; }
    public string Session { get; set; } = null!; // 2018-19, 2019-20, 2020-21
    public string Semester { get; set; } = null!; // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th
    
    public Guid ChairmanId { get; set; }
    public Teacher? Chairman { get; set; }
    public Guid CheifInvigilatorId { get; set; }
    public Teacher? CheifInvigilator { get; set; }
    public ICollection<Teacher> Members { get; set; } = new List<Teacher>();
    public ICollection<TheoryCourseResponsibles> TheoryCourses { get; set; } = new List<TheoryCourseResponsibles>();
    public ICollection<LabCourseResponsibles> LabCourses { get; set; } = new List<LabCourseResponsibles>();
    public ICollection<Invigilator> Invigilators { get; set; } = new List<Invigilator>();
    public ICollection<TermPaperResponsibilities> TermPapers { get; set; } = new List<TermPaperResponsibilities>();
}
