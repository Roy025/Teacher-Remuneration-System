using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.Data;
public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {
    }

    // public DbSet<{{Entity}}> {{TableName}} { get; set; } = null;
    public DbSet<Admin> Admins { get; set; } = null;
    public DbSet<Institute> Institutes { get; set; } = null;
    public DbSet<Department> Departments { get; set; } = null;
    public DbSet<Course> Courses { get; set; } = null;
    public DbSet<Teacher> Teachers { get; set; } = null;
    public DbSet<Student> Students { get; set; } = null;
    public DbSet<Exam> Exams { get; set; } = null;
    public DbSet<Invigilator> Invigilators { get; set; } = null;
    public DbSet<TheoryCourseResponsibles> TheoryCoursesResponsibles { get; set; } = null;
    public DbSet<LabCourseResponsibles> LabCoursesResponsibles { get; set; } = null;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Exam>()
            .HasOne(e => e.Chairman)
            .WithMany(c => c.ChairmanOfExams);
        modelBuilder.Entity<Exam>()
            .HasOne(e => e.CheifInvigilator)
            .WithMany(c => c.ChiefInvigilatorOfExams);

        modelBuilder.Entity<Teacher>()
            .HasMany(t => t.SupervisorOfTermPapers)
            .WithMany(t => t.Supervisors);
        modelBuilder.Entity<Teacher>()
            .HasMany(t => t.ExaminerOfTermPapers)
            .WithMany(t => t.Examiners);

        modelBuilder.Entity<TermPaperResponsibilities>()
            .HasOne(t => t.Tabulator);

        modelBuilder.Entity<TheoryCourseResponsibles>()
        .HasMany(t => t.QuestionSetters)
        .WithMany(t => t.QuestionSettersOfCourses);

        modelBuilder.Entity<TheoryCourseResponsibles>()
        .HasOne(t => t.AnswerPaperCheckerPartA);

        modelBuilder.Entity<TheoryCourseResponsibles>()
        .HasOne(t => t.AnswerPaperCheckerPartB);

        modelBuilder.Entity<TheoryCourseResponsibles>()
        .HasOne(t => t.TermTestAnswerChecker);

        modelBuilder.Entity<TheoryCourseResponsibles>()
        .HasOne(t => t.Tabulator);

        modelBuilder.Entity<TheoryCourseResponsibles>()
                    .HasOne(t => t.QuestionScrutinizerPartA);

        modelBuilder.Entity<TheoryCourseResponsibles>()
                    .HasOne(t => t.QuestionScrutinizerPartB);

        modelBuilder.Entity<TheoryCourseResponsibles>()
                    .HasOne(t => t.QuestionTyper);

        modelBuilder.Entity<TheoryCourseResponsibles>()
        .HasOne(t => t.QuestionModerator);

    }
}
