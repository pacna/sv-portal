using System.ComponentModel.DataAnnotations;

namespace SV.Server.Controllers.Models
{
    public class CardSearchRequest : PaginationSearchRequest
    {
        [Required]
        public CraftType Craft { get; set; }

        public string Name { get; }
    }
}