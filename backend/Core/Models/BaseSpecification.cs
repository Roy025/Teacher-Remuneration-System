using System.Linq.Expressions;
using System.Reflection;
using Core.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore.Query;

namespace Core.Models;
public abstract class BaseSpecification<T> : ISpecification<T>
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
    protected void ApplySorting(string sort)
    {
        if (!string.IsNullOrEmpty(sort))
        {
            const string descendingSuffix = "Desc";

            var descending = sort.EndsWith(descendingSuffix, StringComparison.Ordinal);
            var propertyName = sort.Substring(0, 1).ToUpperInvariant() +
                               sort.Substring(1, sort.Length - 1 - (descending ? descendingSuffix.Length : 0));

            var specificationType = GetType().BaseType;
            var targetType = specificationType.GenericTypeArguments[0];
            var property = targetType.GetRuntimeProperty(propertyName) ??
                           throw new InvalidOperationException($"Because the property {propertyName} does not exist it cannot be sorted.");

            // Create an Expression<Func<T, object>>. 
            var lambdaParamX = Expression.Parameter(targetType, "x");

            var propertyReturningExpression = Expression.Lambda(
                Expression.Convert(
                    Expression.Property(lambdaParamX, property),
                    typeof(object)),
                lambdaParamX);

            if (descending)
            {
                specificationType.GetMethod(
                        nameof(AddOrderByDescending),
                        BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                    .Invoke(this, new object[] { propertyReturningExpression });
            }
            else
            {
                specificationType.GetMethod(
                        nameof(AddOrderBy),
                        BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                    .Invoke(this, new object[] { propertyReturningExpression });
            }
        }
    }

    protected void ApplyGroupBy(string groupBy)
    {
        if (!string.IsNullOrEmpty(groupBy))
        {
            var propertyName = groupBy.Substring(0, 1).ToUpperInvariant() +
                               groupBy.Substring(1, groupBy.Length - 1);

            var specificationType = GetType().BaseType;
            var targetType = specificationType.GenericTypeArguments[0];
            var property = targetType.GetRuntimeProperty(propertyName) ??
                           throw new InvalidOperationException($"Because the property {propertyName} does not exist it cannot be grouped by.");

            var lambdaParamX = Expression.Parameter(targetType, "x");

            var propertyReturningExpression = Expression.Lambda(
                Expression.Convert(
                    Expression.Property(lambdaParamX, property),
                    typeof(object)),
                lambdaParamX);

            specificationType.GetMethod(
                        nameof(AddGroupBy),
                        BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
                    .Invoke(this, new object[] { propertyReturningExpression });
        }
    }
}
