using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace SV.Edge
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    // https://stackoverflow.com/questions/38755516/how-to-change-the-port-number-for-asp-net-core-app
                    webBuilder.UseUrls("http://*:5000");
                });
    }
}
