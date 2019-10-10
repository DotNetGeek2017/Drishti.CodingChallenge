using System.Collections.Generic;

namespace Restaurant.Api.Models
{
    public class AggregateDataModel
    {
        public double TotalDuration { get; set; }

        public double AverageDuration { get; set; }

        public long TotalItems { get; set; }

        public IEnumerable<Pair> Actions { get; set; }

        public IEnumerable<Pair> Stations { get; set; }

        public IEnumerable<Pair> Dishes { get; set; }
    }

    public class Pair
    {
        public string Key { get; set; }

        public int Value { get; set; }
    }
}
