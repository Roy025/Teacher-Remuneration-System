using Core.Entities;

namespace Core.DTOs.OtherDTOs;
public class DepartmentResDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public Institute? Institute { get; set; } = null;
}