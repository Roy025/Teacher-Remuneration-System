using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.TeacherDTOs
{
    public class TeacherLoginDto
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string Designation { get; set; }
        public string Image { get; set; }
    }
}