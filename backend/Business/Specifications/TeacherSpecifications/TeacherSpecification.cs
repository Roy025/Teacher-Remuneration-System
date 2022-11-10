using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Params;

namespace Business.Specifications.TeacherSpecifications;
public class TeacherSpecification : BaseSpecification<Teacher>
{
    public TeacherSpecification(TeacherReqParams teacherParams)
        : base(
            x=>
            (string.IsNullOrEmpty(teacherParams.Email) || x.Email.ToLower() == teacherParams.Email) &&
            (string.IsNullOrEmpty(teacherParams.Institute) || x.Institute == teacherParams.Institute) &&
            (string.IsNullOrEmpty(teacherParams.Department) || x.Department.ToLower() == teacherParams.Department.ToLower())
    )
    {
    }
}
