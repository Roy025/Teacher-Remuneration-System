using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Business.Data;
public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {
    }

    // public DbSet<{{Entity}}> {{TableName}} { get; set; } = null;
    public DbSet<Course> Courses { get; set; } = null;
    public DbSet<Teacher> Teachers { get; set; } = null;
}
