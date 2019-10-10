using System;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Restaurant.Api.Models;

namespace Restaurant.Api.Database
{
    public interface IMongoDbClient
    {
        IMongoDatabase MongoDatabase { get; }
    }
    public class MongoDbClient : IMongoDbClient, IDisposable
    {
        private readonly Lazy<IMongoDatabase> mongoDbLazy;
        private readonly MongoDbCollectionSettings _settings;
        private bool _disposedValue;

        public MongoDbClient(IOptions<MongoDbCollectionSettings> settings)
        {
            _settings = settings.Value;

            mongoDbLazy = new Lazy<IMongoDatabase>(() =>
            {
                var client = new MongoClient(_settings.ConnectionString);
                return client.GetDatabase(_settings.Database);
            });

        }

        public IMongoDatabase MongoDatabase => mongoDbLazy.Value;


        protected virtual void Dispose(bool disposing)
        {
            if (!_disposedValue)
            {
                if (disposing)
                {
                }

                _disposedValue = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
