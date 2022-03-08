namespace SV.Server.Controllers.Models
{
    public class CardAddRequest : CardUpdateRequest
    {
        public string Name { get; set; }
        public int PPCost { get; set; }
        public string ArtLocation { get; set; }
    }
}