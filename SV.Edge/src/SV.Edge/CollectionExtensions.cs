namespace SV.Edge;

public static class CollectionExtensions
{
    public static List<T> ToList<T>(this Dictionary<string, T> dict)
    {
        return dict.Values.ToList();
    }

    public static bool IsNullOrEmpty<T>(this IList<T> list)
    {
        return list == null || list.Count == 0;
    }

    public static bool IsNullOrEmpty<T>(this IEnumerable<T> enumerable)
    {
        return enumerable == null || !enumerable.Any();
    }
}