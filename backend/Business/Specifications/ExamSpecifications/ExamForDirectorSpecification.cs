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
        AddInclude(x => x.Include(x => x.Chairman).ThenInclude(c=> c.Department).ThenInclude(d=>d.Institute));
        AddInclude(x => x.Include(x => x.CheifInvigilator).ThenInclude(c => c.Department).ThenInclude(d => d.Institute));
        AddInclude(x => x.Include(x => x.Members).ThenInclude(c => c.Department).ThenInclude(d => d.Institute));
        AddInclude(x => x.Include(x => x.Invigilators).ThenInclude(c => c.Teacher).ThenInclude(d => d.Department).ThenInclude(d => d.Institute));
        

        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.Course));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.QuestionSetters));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.QuestionModerator));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.AnswerPaperCheckerPartA));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.AnswerPaperCheckerPartB));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.QuestionScrutinizerPartA));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.QuestionScrutinizerPartB));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.QuestionTyper));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.TermTestAnswerChecker));
        AddInclude(x => x.Include(x => x.TheoryCourses).ThenInclude(s => s.Tabulator));

        AddInclude(x => x.Include(x => x.LabCourses).ThenInclude(s => s.Course));
        AddInclude(x => x.Include(x => x.LabCourses).ThenInclude(s => s.Examiner));
        AddInclude(x => x.Include(x => x.LabCourses).ThenInclude(s => s.Tabulator));
        AddInclude(x => x.Include(x => x.LabCourses).ThenInclude(s => s.VivaExaminer));

        AddInclude(x => x.Include(x => x.TermPapers).ThenInclude(s => s.Course));
        AddInclude(x => x.Include(x => x.TermPapers).ThenInclude(s => s.Supervisors));
        AddInclude(x => x.Include(x => x.TermPapers).ThenInclude(s => s.Examiners));

    }
}
