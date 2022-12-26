namespace SV.Edge.Settings;
public class CORSPolicySettings : ICORSPolicySettings
{
    public string PolicyName { get; set; }
    public string[] AllowedOrigins { get; set; }
}