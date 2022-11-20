using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Business.Specifications.GeneralSpecifications;
using Core.DTOs.CourseDTOs;
using Core.DTOs.OtherDTOs;
using Core.DTOs.TeacherDTOs;
using Core.Entities;
using Core.Interfaces.Repositories;
using Core.Interfaces.Services;

namespace Business.Services
{
    public class GeneralService : IGeneralService
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        public GeneralService(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IReadOnlyList<CourseResponseDto>> GetAllCourseAsync(Guid department)
        {
            var spec = new CourseByDeptIdSpec(department);
            var courses = await _unitOfWork.Repository<Course>().ListAllAsyncWithSpec(spec);
            return _mapper.Map<IReadOnlyList<CourseResponseDto>>(courses);
        }

        public async Task<IReadOnlyList<DepartmentResDto>> GetAllDepartmentAsync(Guid institute)
        {
            var spec = new DepartmentByInstituteSpecification(institute);
            var departments = await _unitOfWork.Repository<Department>().ListAllAsyncWithSpec(spec);
            return _mapper.Map<IReadOnlyList<DepartmentResDto>>(departments);
        }

        public async Task<IReadOnlyList<Institute>> GetAllInstituteAsync()
        {
            var institutes = await _unitOfWork.Repository<Institute>().ListAllAsync();
            return institutes;
        }

        public async Task<IReadOnlyList<TeacherResponseDto>> GetAllTeacherAsync(Guid department)
        {
            var spec = new TeacherByDept(department);
            var teachers = await _unitOfWork.Repository<Teacher>().ListAllAsyncWithSpec(spec);
            var res = _mapper.Map<IReadOnlyList<TeacherResponseDto>>(teachers);
            return res;
        }
    }
}