namespace Core.Models
{
    public class UserFromToken
    {
        public string Email { get; set; }
        public Guid UserId { get; set; }
        public string Role { get; set; }
        public Guid DepartmentId { get; set; }
    }
}