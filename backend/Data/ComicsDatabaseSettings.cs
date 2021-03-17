using System;

namespace backend.Data
{
    public class ComicsDatabaseSettings : IComicsDatabaseSettings
    {
        public string ComicCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IComicsDatabaseSettings 
    {
        string ComicCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}