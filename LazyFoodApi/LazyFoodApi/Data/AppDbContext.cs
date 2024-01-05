using LazyFoodApi.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace LazyFoodApi.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
        public DbSet<Favorite> Favorites { get; set; }
    }
}
