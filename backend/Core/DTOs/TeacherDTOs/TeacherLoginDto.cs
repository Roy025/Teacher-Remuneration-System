using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.TeacherDTOs
{
    public class TeacherLoginDto
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Role { get; set; }
        public string Image { get; set; }
    }
}