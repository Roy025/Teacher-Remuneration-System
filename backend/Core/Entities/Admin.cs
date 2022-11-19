using System.Net.Mail;

namespace Core.Entities;
public class Admin : BaseEntity
{
    public string? Name { get; set; } = "";
    private string _email;
    public string Email { get; set;}

    public string Password { get; set; }
    public string? Designation { get; set; } = "Admin";
    private bool ValidateEmailAddress(string email)
    {
        if (string.IsNullOrEmpty(email)) return false;

        try
        {
            MailAddress to = new MailAddress(email);

            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

}
