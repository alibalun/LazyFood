using System.ComponentModel.DataAnnotations;

namespace LazyFoodApi.Data.Model
{
    public class Favorite
    {
        [Key]
        public int Id { get; set; }
        public String Title { get; set; }
        public String ImagePath { get; set; }
        public String OrderId { get; set; }
        public String Email { get; set; }

    }
}
