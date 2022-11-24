using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.OtherDTOs;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.Specifications.BillSpecifications;
public class ExamFetchForBillSpec : BaseSpecification<Exam>
{
    public ExamFetchForBillSpec(BillParams billParams)
        : base(x =>
        (string.IsNullOrEmpty(billParams.Session) || x.Session == billParams.Session) &&
        (string.IsNullOrEmpty(billParams.Semester) || x.Semester == billParams.Semester) &&
        (billParams.TeacherId == null || (
            x.Members.Any(m => m.Id == billParams.TeacherId) ||
            x.Invigilators.Any(m => m.Id == billParams.TeacherId) ||
            x.TheoryCourses.Any(m =>
                m.QuestionModeratorId == billParams.TeacherId ||
                m.AnswerPaperCheckerPartAId == billParams.TeacherId ||
                m.AnswerPaperCheckerPartBId == billParams.TeacherId ||
                m.TermTestAnswerCheckerId == billParams.TeacherId ||
                m.TabulatorId == billParams.TeacherId ||
                m.QuestionScrutinizerPartAId == billParams.TeacherId ||
                m.QuestionScrutinizerPartAId == billParams.TeacherId ||
                m.QuestionScrutinizerPartBId == billParams.TeacherId ||
                m.QuestionTyperId == billParams.TeacherId ||
                m.QuestionSetters.Any(qs => qs.Id == billParams.TeacherId)
            ) ||
            x.LabCourses.Any(m =>
                m.ExaminerId == billParams.TeacherId ||
                m.TabulatorId == billParams.TeacherId ||
                m.VivaExaminerId == billParams.TeacherId
            ) ||
            x.TermPapers.Any(m =>
                m.TabulatorId == billParams.TeacherId ||
                m.Examiners.Any(e => e.Id == billParams.TeacherId) ||
                m.Supervisors.Any(e => e.Id == billParams.TeacherId)
            )
            )))
    {
        AddInclude(x => x.Include(y => y.TheoryCourses).ThenInclude(c => c.QuestionSetters));
        AddInclude(x => x.Include(y => y.TermPapers).ThenInclude(c => c.Supervisors));
        AddInclude(x => x.Include(y => y.TermPapers).ThenInclude(c => c.Examiners));
        AddInclude(x => x.Include(y => y.TheoryCourses).ThenInclude(c => c.Course));
        AddInclude(x => x.Include(y => y.LabCourses).ThenInclude(c => c.Course));
        AddInclude(x => x.Include(y => y.TermPapers).ThenInclude(c => c.Course));

    }

}
