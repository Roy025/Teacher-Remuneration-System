using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.CourseDTOs;

namespace Core.DTOs.ExamDTOs
{
    public class CourseResponseForTeacher
    {
        public IReadOnlyList<CourseForExamDto> TermTestCourses { get; set; } = new List<CourseForExamDto>();
        public IReadOnlyList<CourseForExamDto> AnswerPaperCheckingPartACourses { get; set; } = new List<CourseForExamDto>();
        public IReadOnlyList<CourseForExamDto> AnswerPaperCheckingPartBCourses { get; set; } = new List<CourseForExamDto>();
        public IReadOnlyList<CourseForExamDto> ScrutinyCoursesPartA { get; set; } = new List<CourseForExamDto>();
        public IReadOnlyList<CourseForExamDto> ScrutinyCoursesPartB { get; set; } = new List<CourseForExamDto>();
        public IReadOnlyList<CourseForExamDto> PracticalExamCourses { get; set; } = new List<CourseForExamDto>();
        public IReadOnlyList<CourseForExamDto> VivaExamCourses { get; set; } = new List<CourseForExamDto>();
    }
}