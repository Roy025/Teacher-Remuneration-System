using Core.Entities;
using Core.Params;

namespace Business.Specifications.ExamSpecifications
{
    public class SessionOnlySpecification : BaseSpecification<Exam>
    {
        public SessionOnlySpecification(ExamReqParamOnlySession examParams)
            : base(x =>
                (string.IsNullOrEmpty(examParams.Session) || x.Session.ToLower() == examParams.Session) &&
                (examParams.DepartmentId == null || x.DepartmentId == examParams.DepartmentId) 
            )
        {
        }
    }
}