using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.CourseDTOs
{
    public class CourseCreateDto
    {
        public Guid DepartmentId { get; set; }
        [MinLength(6), MaxLength(7)]
        public string Code { get; set; }
        public string Title { get; set; }
        public Decimal Credit { get; set; }
        public string Type { get; set; } // Theory or Lab
        public string Level { get; set; }
    }
}