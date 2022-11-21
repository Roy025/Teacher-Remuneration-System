using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.GeneralSpecifications;
public class TeacherByIdSpec : BaseSpecification<Teacher>
{
    public TeacherByIdSpec(Guid id) : base(x => x.Id == id)
    {
        AddInclude(x => x.Include(t => t.Department));
    }

}
