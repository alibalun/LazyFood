using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using LazyFoodApi.Data;
using LazyFoodApi.Data.Model;
using Newtonsoft.Json.Linq;
using System.Collections;
using NuGet.Protocol;
using Newtonsoft.Json;

namespace LazyFoodApi.Controllers
{

    [ApiController]
    public class FavoritesController : Controller
    {
        private readonly AppDbContext _context;

        public FavoritesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("favorites")]
        // GET: favorites
        public IActionResult GetFavorites([FromQuery]string email)
        {
            var favoritesList = _context.Favorites.Where(f => f.Email == email).ToList();

            if (favoritesList == null || !favoritesList.Any())
            {
                var wrongResult = new
                {
                    message = "Not Found",
                    statusCode = 404
                };
                return Ok(favoritesList);
            }

            var formattedResult = favoritesList.Select(favorite => new
            {
                Id = favorite.Id,
                Title = favorite.Title,
                ImagePath = favorite.ImagePath,
                OrderId = favorite.OrderId
            });

            return Ok(new { message = "success", statusCode = "200" ,foods = formattedResult});
        }
        [HttpPost]
        [Route("favorites")]
        //[ValidateAntiForgeryToken]
        // POST: favorites
        public IActionResult AddFavorite([FromBody]Favorite favorite)// Favorite favorite
        {
            Favorite finded = _context.Favorites.Where(f => f.OrderId == favorite.OrderId && f.Email == favorite.Email).FirstOrDefault();
            if(finded == null)
            {
                _context.Favorites.Add(favorite);
                _context.SaveChanges();
            }

            return Ok(favorite);
        }



        [HttpDelete]
        [Route("favorites")]
        //[ValidateAntiForgeryToken]
        // DELETE: favorites/{orderId}
        public IActionResult RemoveItem([FromBody]FavoriteBody itemBody)
        {
            try
            {
                Favorite itemToRemove = _context.Favorites.Where(item => item.OrderId == itemBody.OrderId && item.Email == itemBody.Email).FirstOrDefault();

                if (itemToRemove == null)
                {
                    return Ok(new
                    {
                        message="Item not found",
                        status=404,
                    });
                }

                _context.Favorites.Remove(itemToRemove);
                _context.SaveChanges();

                return Ok(new 
                {
                    status=200,Message = "Item removed successfully." 
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        [HttpGet]
        [Route("favorite")]
        // GET: favorites/{orderId}
        public IActionResult GetFavorites([FromQuery]string orderId,[FromQuery] string email)
        {
            Favorite favorite = _context.Favorites.Where(f => f.OrderId == orderId && f.Email == email).FirstOrDefault();
            bool hasFavorite = false;
            if(favorite != null)
            {
                hasFavorite = true;
            }
            return Ok(hasFavorite);
        }
    }
}
