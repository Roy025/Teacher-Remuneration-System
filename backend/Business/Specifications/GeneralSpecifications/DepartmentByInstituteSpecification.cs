using Core.Entities;

namespace Business.Specifications.GeneralSpecifications;
public class DepartmentByInstituteSpecification : BaseSpecification<Department>
{
    public DepartmentByInstituteSpecification(Guid instituteId) : base(x => x.InstituteId == instituteId)
    {
    }
}
