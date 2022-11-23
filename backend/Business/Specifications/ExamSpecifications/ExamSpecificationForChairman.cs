using Core.Entities;
using Core.Params;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.ExamSpecifications;
public class ExamSpecificationForChairman : BaseSpecification<Exam>
{
    protected ExamSpecificationForChairman(ExamReqParams examReqParams) : base(x =>
        (string.IsNullOrEmpty(examReqParams.Session) || x.Session == examReqParams.Session) &&
        (string.IsNullOrEmpty(examReqParams.Semester) || x.Semester == examReqParams.Semester) &&
        (examReqParams.DepartmentId == null || x.DepartmentId == examReqParams.DepartmentId)
    )
    {
        AddInclude(x => x.Include(e => e.Chairman));
        AddInclude(x => x.Include(e => e.TheoryCourses).ThenInclude(t => t.Course));
        AddInclude(x => x.Include(e => e.LabCourses).ThenInclude(t => t.Course));
        AddInclude(x => x.Include(e => e.Invigilators).ThenInclude(t => t.Course));
        AddInclude(x => x.Include(e => e.TermPapers).ThenInclude(t => t.Course));
        AddInclude(x => x.Include(e => e.Invigilators));
    }
}