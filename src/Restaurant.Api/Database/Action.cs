using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Restaurant.Api.Database
{
    public class RestaurantAction
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("dish")]
        public string Dish { get; set; }
        [BsonElement("station")]

        public string Station { get; set; }

        [BsonElement("action")]
        public string UserAction { get; set; }

        [BsonElement("duration")]
        public double Duration { get; set; }

        [BsonElement("startTime")]

        public string StartDateTime { get; set; }

    }
}
