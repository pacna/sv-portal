using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SV.Edge.Contexts;
using SV.Edge.Settings;

namespace SV.Edge;
public class Startup
{
    private ICORSPolicySettings CORSPolicySettings { get; set; }
    private INpgsqlPostgresDBSetting NpgsqlPostgresDBSetting { get; set; }
    private bool UseInMemory { get; set; }

    public Startup(IConfiguration configuration)
    {
        this.GetInitSettings(configuration: configuration);

        Console.WriteLine("SV.Edge Started");
    }
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();
        services.AddServices();
        services.AddRepositories(useInMemory: this.UseInMemory);
        services.AddSwagger();
        services.AddCors(corsPolicySettings: this.CORSPolicySettings);
        services.AddDbContext<SVPortalContext>(optionsBuilder =>
        {
            optionsBuilder.UseNpgsql(this.NpgsqlPostgresDBSetting.ConnectionString, options =>
            {
                options.EnableRetryOnFailure
                (
                    maxRetryCount: 5,
                    maxRetryDelay: TimeSpan.FromSeconds(3),
                    errorCodesToAdd: null
                );
            });
        });

#if DEBUG
        Console.WriteLine(this.UseInMemory ? "Setting up InMemory datastore" : "");
#endif
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();
        app.UseSwagger();
        app.UseCors(policyName: this.CORSPolicySettings.PolicyName);
        app.UseMiddleware<HttpExceptionMiddleware>();
        app.UseSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "SV Edge");
            // THIS IS IMPORTANT TO SET SWAGGER In root (/) dir
            options.RoutePrefix = string.Empty;
        });

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }

    private void GetInitSettings(IConfiguration configuration)
    {
        try
        {
            this.CORSPolicySettings = configuration.GetSection("CORSPolicy").Get<CORSPolicySettings>();
            this.NpgsqlPostgresDBSetting = configuration.GetSection("NpgsqlPostgresDBSetting").Get<NpgsqlPostgresDBSetting>();
            this.UseInMemory = Environment.GetCommandLineArgs().Any(x => string.Equals(x, "--inmemory", StringComparison.OrdinalIgnoreCase));
        }
        catch (Exception ex)
        {
            Console.WriteLine("Unable to set setting --", ex.ToString());
        }
    }
}
