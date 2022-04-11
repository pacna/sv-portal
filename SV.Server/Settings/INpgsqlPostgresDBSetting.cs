namespace SV.Server.Settings
{
    public interface INpgsqlPostgresDBSetting
    {
        string ConnectionString { get; set; }
    }
}