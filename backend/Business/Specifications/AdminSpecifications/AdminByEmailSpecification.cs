using Core.Entities;

namespace Business.Specifications.AdminSpecifications;
public class AdminByEmailSpecification : BaseSpecification<Admin>
{
    public AdminByEmailSpecification(string email)
        : base(a => a.Email == email)
    {
    }
}
