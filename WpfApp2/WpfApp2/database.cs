using Microsoft.EntityFrameworkCore;

namespace WpfApp2
{
    public class database : DbContext
    {
        public DbSet<User> Information { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\strangerts\Documents\GitHub\GUI\database\product_app.db");
        }
    }
}
