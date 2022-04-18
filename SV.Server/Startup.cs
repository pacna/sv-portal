using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SV.Server.Contexts;
using SV.Server.Settings;

namespace SV.Server
{
    public class Startup
    {
        private IConfiguration Configuration { get; }
        private ICORSPolicySettings CORSPolicySettings { get; set; }
        private INpgsqlPostgresDBSetting NpgsqlPostgresDBSetting { get; set; }

        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
            this.GetInitSettings(configuration: configuration);
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddServices();
            services.AddRepositories();
            services.AddSwagger();
            services.AddCors(corsPolicySettings: this.CORSPolicySettings);
            services.AddDbContext<SVPortalContext>(options =>
            {
                options.UseNpgsql(this.NpgsqlPostgresDBSetting.ConnectionString);
            });
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
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "SV Server");
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
            }
            catch (Exception ex)
            {
                Console.WriteLine("Unable to set setting --", ex.ToString());
            }
        }
    }
}
