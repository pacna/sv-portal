namespace SV.Edge.Settings;

internal class CORSPolicySettings : ICORSPolicySettings
{
    public string PolicyName { get; set; }
    public string[] AllowedOrigins { get; set; }
}