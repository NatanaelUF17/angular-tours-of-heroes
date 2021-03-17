using System;
using backend.Services;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private readonly HeroServices _heroService;

        public HeroesController(HeroServices heroService)
        {
            _heroService = heroService;
        }

        // Get all heroes
        [HttpGet]
        public ActionResult<List<Heroes>> GetAll()
        {
            return _heroService.GetAll();
        }

        // Get one specific hero
        [HttpGet("{id:length(24)}", Name = "GetHero")]
        public ActionResult<Heroes> GetOne(string id)
        {
            var hero = _heroService.GetOne(id);

            if(hero == null)
            {
                return NotFound();
            }

            return hero;
        } 

        // Create a new hero 
        [HttpPost]
        public ActionResult<Heroes> Create(Heroes hero)
        {
            _heroService.Create(hero);

            return CreatedAtRoute("GetHero", new { id = hero.Id.ToString() }, hero);
        }

        // Update an specific hero
        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Heroes hero)
        {
            var _hero = _heroService.GetOne(id);

            if(_hero == null)
            {
                return NotFound();
            }

            _heroService.Update(id, hero);

            return NoContent();
        }

        // Delete an specific hero
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var hero = _heroService.GetOne(id);

            if(hero == null)
            {
                return NotFound();
            }

            _heroService.Remove(hero.Id);

            return NoContent();
        }
    }
}