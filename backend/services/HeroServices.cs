using backend.Data;
using backend.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace backend.Services
{
    public class HeroServices
    {
        private readonly IMongoCollection<Heroes> _heroes;

        public HeroServices(IComicsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _heroes = database.GetCollection<Heroes>(settings.ComicCollectionName);
        }

        // Get all heroes from the database collection
        public List<Heroes> GetAll() => 
            _heroes.Find(heros => true).ToList();

        // Get one specific hero from the database collection
        public Heroes GetOne(string id) => 
            _heroes.Find<Heroes>(hero => hero.Id == id).FirstOrDefault();

        // Creates a hero in the database collection
        public Heroes Create(Heroes hero)
        {
            _heroes.InsertOne(hero);
            return hero;
        }
        // Update's an existing hero in the database collection
        public void Update(string id, Heroes heroUpdate) => 
            _heroes.ReplaceOne(hero => hero.Id == id, heroUpdate);

        // Remove's a hero from the database collection using the entire object
        public void Remove(Heroes heroRemove) => 
            _heroes.DeleteOne(hero => hero.Id == heroRemove.Id);
            
        // Remove's a hero from the database collection using the id 
        public void Remove(string id) =>
             _heroes.DeleteOne(hero => hero.Id == id);
    }
}