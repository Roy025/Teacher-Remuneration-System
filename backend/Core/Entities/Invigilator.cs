using Microsoft.EntityFrameworkCore;

namespace Core.Entities
{
    // [Index(nameof(ExamId), nameof(CourseId), nameof(TeacherId), IsUnique = true)]
    public class Invigilator : BaseEntity
    {
        public Guid ExamId { get; set; } = Guid.Empty;
        public Exam? Exam { get; set; } = null!;
        public Guid TeacherId { get; set; } = Guid.Empty;
        public Teacher Teacher { get; set; } = null!;
        public Guid? CourseId { get; set; } = null;
        public Course? Course { get; set; } = null!;
    }
}