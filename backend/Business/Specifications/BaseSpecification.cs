using System.Linq.Expressions;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore.Query;

namespace Business.Specifications;
public class BaseSpecification<T> : ISpecification<T>
{
    protected BaseSpecification()
    {
    }

    protected BaseSpecification(Expression<Func<T, bool>>? criteria)
    {
        Criteria = criteria;
    }
    public Expression<Func<T, bool>>? Criteria { get; }

    public Expression<Func<T, object>>? OrderBy { get; private set; }

    public Expression<Func<T, object>>? OrderByDescending { get; private set; }

    public Expression<Func<T, object>>? GroupBy { get; private set; }

    public int Take { get; private set; }

    public int Skip { get; private set; }

    public bool IsPagingEnabled { get; private set; }

    public List<Func<IQueryable<T>, IIncludableQueryable<T, object>>> Includes { get; } = new List<Func<IQueryable<T>, IIncludableQueryable<T, object>>>();


    protected void AddInclude(Func<IQueryable<T>, IIncludableQueryable<T, object>> includeExpression)
        => Includes.Add(includeExpression);

    protected void AddOrderBy(Expression<Func<T, object>> orderByExpression)
        => OrderBy = orderByExpression;

    protected void AddOrderByDescending(Expression<Func<T, object>> orderByDescExpression)
        => OrderByDescending = orderByDescExpression;

    protected virtual void AddGroupBy(Expression<Func<T, object>> groupByExpression)
        => GroupBy = groupByExpression;

    protected void ApplyPaging(int skip, int take)
    {
        Skip = skip;
        Take = take;
        IsPagingEnabled = true;
    }
}
