namespace SV.Edge.Settings
{
    public interface ICORSPolicySettings
    {
        string PolicyName { get; set; }
        string[] AllowedOrigins { get; set; }
    }
}