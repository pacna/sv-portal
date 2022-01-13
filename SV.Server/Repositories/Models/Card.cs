namespace SV.Server.Repositories.Models
{
    public class Card
    {
        public string Id { get; init; }
        public string FlavorText { get; init; }
        public string Name { get; set; }
        public int PPCost { get; init; }
    }
}