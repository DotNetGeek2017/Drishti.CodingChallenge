using System.Collections.Generic;

namespace Restaurant.Api.Models
{
    public class PaginationQuery<TQueryInput> : IPaginationQuery<TQueryInput> where TQueryInput : class
    {
        public int PageSize { get; set; }

        public int PageIndex { get; set; }

        public TQueryInput DataQueryInput { get; set; }

        public OrderBy OrderBy { get; set; }
    }

    public interface IPaginationQuery<TQueryInput> where TQueryInput : class
    {
        int PageSize { get; set; }

        int PageIndex { get; set; }

        TQueryInput DataQueryInput { get; set; }

        OrderBy OrderBy { get; set; }
    }

    public enum OrderBy
    {
        Ascending,
        Descending
    }

    public class PaginationResult<TResult> : IPaginationResult<TResult> where TResult : class
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public long TotalCount { get; set; }
        public int TotalPages { get; set; }
        public IEnumerable<TResult> Items { get; set; }
    }

    public interface IPaginationResult<TResult> where TResult : class
    {
        int PageIndex { get; set; }
        int PageSize { get; set; }
        long TotalCount { get; set; }
        int TotalPages { get; set; }
        IEnumerable<TResult> Items { get; set; }
    }
}
