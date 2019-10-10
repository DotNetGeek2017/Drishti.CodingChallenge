using System;

namespace Restaurant.Api.Attributes
{
    public class MogoDbCollectionAttribute : Attribute
    {
        public string CollectionName { get; }
        public MogoDbCollectionAttribute(string collectionName)
        {
            CollectionName = collectionName;
        }
    }
}
