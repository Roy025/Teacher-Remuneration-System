using Core.Entities;
using Core.Params;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.ExamSpecifications;
public class ExamWithMembersSpecification : BaseSpecification<Exam>
{
    public ExamWithMembersSpecification(ExamReqParams examReqParams) : base(
        x => (string.IsNullOrEmpty(examReqParams.Semester) || x.Semester == examReqParams.Semester) &&
             (string.IsNullOrEmpty(examReqParams.Session) || x.Session == examReqParams.Session) &&
             (string.IsNullOrEmpty(examReqParams.Department) || x.Department == examReqParams.Department)
    )
    {
        AddInclude(x => x.Include(x => x.Chairman));
        AddInclude(x => x.Include(x => x.CheifInvigilator));
        AddInclude(x => x.Include(x => x.Members));
    }
}
