namespace Core.Models
{
    public class UserFromToken
    {
        public string Email { get; set; }
        public Guid UserId { get; set; }
        public string Designation { get; set; }
        public string Department { get; set; }
    }
}