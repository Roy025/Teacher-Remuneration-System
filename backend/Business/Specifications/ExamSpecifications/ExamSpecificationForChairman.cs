using Core.Entities;
using Core.Params;

namespace Business.Specifications.ExamSpecifications;
public class ExamSpecificationForChairman : BaseSpecification<Exam>
{
    protected ExamSpecificationForChairman(ExamReqParams examReqParams) : base(x =>
        (string.IsNullOrEmpty(examReqParams.Session) || x.Session == examReqParams.Session) &&
        (string.IsNullOrEmpty(examReqParams.Semester) || x.Semester == examReqParams.Semester) &&
        (examReqParams.DepartmentId == null || x.DepartmentId == examReqParams.DepartmentId) &&
        (examReqParams.TeacherId == null || x.ChairmanId == examReqParams.TeacherId)
    )
    {
        // AddInclude(x => x.Chairman);
        // AddInclude(x => x.CheifInvigilator);
        // AddInclude(x => x.Members);
        // AddInclude(x => x.TheoryCourses);
        // AddInclude(x => x.LabCourses);
    }
}