using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Params
{
    public class ExamReqParamOnlySession
    {
        public ExamReqParamOnlySession()
        { }
        public ExamReqParamOnlySession( string session, Guid TeacherId, string department)
        {
            Session = session;
            this.TeacherId = TeacherId;
            this.Department = department;
        }
        public string Session { get; set; } = null!;
        public Guid TeacherId { get; set; } = Guid.Empty;
        public string Department { get; set; } = null!;
    }
}