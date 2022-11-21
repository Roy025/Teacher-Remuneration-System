using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.GeneralSpecifications
{
    public class TeacherByDept : BaseSpecification<Teacher>
    {
        public TeacherByDept(Guid departmentId) : base(x => x.DepartmentId == departmentId)
        {
            AddInclude(x => x.Include(y => y.Department).ThenInclude(d => d.Institute));
        }
    }
}