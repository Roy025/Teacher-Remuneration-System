namespace Business.Specifications.GeneralSpecifications;
public class CourseByDeptIdSpec : BaseSpecification<Course>
{
    public CourseByDeptIdSpec(Guid deptId) : base(c => c.DepartmentId == deptId)
    {
    }
}
