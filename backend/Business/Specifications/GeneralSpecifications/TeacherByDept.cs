using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Business.Specifications.GeneralSpecifications
{
    public class TeacherByDept : BaseSpecification<Teacher>
    {
        public TeacherByDept(Guid departmentId) : base(x => x.DepartmentId == departmentId)
        {
        }
    }
}