using Core.Entities;
using Core.Params;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.ExamSpecifications;

public class ExamForTeacherSpec : BaseSpecification <Exam>
{
    public ExamForTeacherSpec(ExamReqParams examReqParams) : base(x =>
        (string.IsNullOrEmpty(examReqParams.Session) || x.Session == examReqParams.Session) &&
        (string.IsNullOrEmpty(examReqParams.Semester) || x.Semester == examReqParams.Semester) &&
        (examReqParams.DepartmentId == null || x.DepartmentId == examReqParams.DepartmentId)
    )
    {
        AddInclude(x => x.Include(y => y.TheoryCourses).ThenInclude(c => c.Course));
        AddInclude(x => x.Include(y => y.LabCourses).ThenInclude(c => c.Course));
        AddInclude(x => x.Include(y => y.Department));
    }

}
