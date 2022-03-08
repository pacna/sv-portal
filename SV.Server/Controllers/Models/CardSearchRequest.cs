namespace SV.Server.Controllers.Models
{
    public class CardSearchRequest : PaginationSearchRequest
    {
        public CraftType? Craft { get; set; }

        public string Name { get; }
    }
}