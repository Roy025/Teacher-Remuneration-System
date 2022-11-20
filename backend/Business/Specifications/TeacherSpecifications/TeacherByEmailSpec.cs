using Core.Entities;

namespace Business.Specifications.TeacherSpecifications;
public class TeacherByEmailSpec : BaseSpecification<Teacher>
{
    public TeacherByEmailSpec(string email) : base(t => t.Email == email)
    {
    }
}
