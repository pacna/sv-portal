using System.Collections.Generic;
using System.Linq;

namespace SV.Server.Repositories
{
    public static class CollectionExtension
    {
        public static List<TValue> ToList<TValue>(this Dictionary<string, TValue> dict)
        {
            return dict.Values.ToList();
        }
    }
}