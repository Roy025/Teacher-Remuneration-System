using AutoMapper;
using Core.DTOs.TeacherDTOs;
using Core.Entities;

namespace Core.MapperProfile;
public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        // CreateMap<Teacher, TeacherResponseDto>()
        //     .ForMember(d => d.Department, opt => opt.MapFrom(s => s.Department));

        CreateMap<Teacher, TeacherResponseDto>();
        CreateMap<TeacherCreateDto, Teacher>();

    }
}
