using AutoMapper;
using Core.DTOs.ExamDTOs;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;

namespace Core.MapperProfile;
public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        // CreateMap<Teacher, TeacherResponseDto>()
        //     .ForMember(d => d.Department, opt => opt.MapFrom(s => s.Department));

        CreateMap<Teacher, TeacherResponseDto>().ReverseMap();
        CreateMap<TeacherCreateDto, Teacher>().ReverseMap();
        CreateMap<TeacherUpdateDto, Teacher>().ReverseMap();

        CreateMap<Exam, ExamResponseDtoDirector>().ReverseMap();
        
        CreateMap<InstituteDto, Institute>().ReverseMap();
        
        CreateMap<DepartmentCreateDto, Department>().ReverseMap();
        CreateMap<Department, DepartmentResDto>().ReverseMap();
        
        CreateMap<AdminRegisterDTO, Admin>().ReverseMap();
        CreateMap<Admin, AdminLoginResDto>().ReverseMap();

    }
}
