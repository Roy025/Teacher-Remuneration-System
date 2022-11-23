using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.CourseDTOs;

namespace Core.DTOs.ExamDTOs
{
    public class CourseResponseForTeacher
    {
        public ICollection<CourseForExamDto> AnswerPaperCheckingPartACourses { get; set; } = new List<CourseForExamDto>();
        public ICollection<CourseForExamDto> AnswerPaperCheckingPartBCourses { get; set; } = new List<CourseForExamDto>();
        public ICollection<CourseForExamDto> ScrutinyCoursesPartA { get; set; } = new List<CourseForExamDto>();
        public ICollection<CourseForExamDto> ScrutinyCoursesPartB { get; set; } = new List<CourseForExamDto>();
        public ICollection<CourseForExamDto> PracticalExamCourses { get; set; } = new List<CourseForExamDto>();
        public ICollection<CourseForExamDto> VivaExamCourses { get; set; } = new List<CourseForExamDto>();
        public ICollection<CourseForExamDto> TermTestCourses { get; set; } = new List<CourseForExamDto>();
    }
}