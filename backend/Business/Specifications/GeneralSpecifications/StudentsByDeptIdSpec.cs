using Core.Entities;

namespace Business.Specifications.GeneralSpecifications;
public class StudentsByDeptIdSpec : BaseSpecification<Student>
{
    public StudentsByDeptIdSpec(Guid deptId) : base(s => s.DepartmentId == deptId)
    {
    }

}
