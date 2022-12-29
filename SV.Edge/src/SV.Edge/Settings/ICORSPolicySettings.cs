namespace SV.Edge.Settings;
internal interface ICORSPolicySettings
{
    string PolicyName { get; set; }
    string[] AllowedOrigins { get; set; }
}