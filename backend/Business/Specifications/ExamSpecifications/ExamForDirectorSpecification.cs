using Core.Entities;
using Core.Params;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.ExamSpecifications;
public class ExamForDirectorSpecification : BaseSpecification<Exam>
{
    public ExamForDirectorSpecification(ExamReqParams examReqParams) : base(
        x => (string.IsNullOrEmpty(examReqParams.Semester) || x.Semester == examReqParams.Semester) &&
             (string.IsNullOrEmpty(examReqParams.Session) || x.Session == examReqParams.Session) &&
             (examReqParams.DepartmentId == null || x.DepartmentId == examReqParams.DepartmentId)
    )
    {
        AddInclude(x => x.Include(x => x.Chairman));
        AddInclude(x => x.Include(x => x.CheifInvigilator));
        AddInclude(x => x.Include(x => x.Members));
    }
}
