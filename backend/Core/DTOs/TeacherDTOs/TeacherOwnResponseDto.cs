using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.DTOs.TeacherDTOs
{
    public class TeacherOwnResponseDto
    {
        public Guid Id { get; set; }
        public string? Name { get; set; } = null;
        public string Email { get; set; }
        public Department? Department { get; set; } = null;
        public string? BankAccount { get; set; } = null!;
        public string Designation { get; set; } = "Lecturer";
        public string? Image { get; set; } = null!;
    }
}