using Core.DTOs.TeacherDTOs;
using Core.Entities;

namespace Core.DTOs.ExamDTOs
{
    public class ExamResponseDtoDirector
    {
        public TeacherResponseDto? Chairman { get; set; }
        public TeacherResponseDto? CheifInvigilator { get; set; }
        public ICollection<TeacherResponseDto> Members { get; set; } = new List<TeacherResponseDto>();
    }
}