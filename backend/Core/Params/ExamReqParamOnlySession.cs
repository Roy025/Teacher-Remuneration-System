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
        public string Session { get; set; } = null!;
        public Guid TeacherId { get; set; } = Guid.Empty;
        public Guid? DepartmentId { get; set; } = null; 
    }
}