using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using SV.Edge.Repositories;
using SV.Edge.Services;
using SV.Edge.Settings;

namespace SV.Edge;
internal static class ServicesCollectionExtensions
{
    internal static IServiceCollection AddMVC(this IServiceCollection services)
    {
        services.AddControllers();

        return services;
    }

    internal static IServiceCollection AddServices(this IServiceCollection services)
    {
        return services.AddTransient<ICardService, CardService>();
    }

    internal static IServiceCollection AddRepositories(this IServiceCollection services, bool useInMemory)
    {
        if (useInMemory)
        {
            return services.AddTransient<ICardRepository, CardInMemoryRepository>();
        }
        
        return services.AddTransient<ICardRepository, CardRepository>();
    }

    internal static IServiceCollection AddSwagger(this IServiceCollection services)
    {
        return services.AddSwaggerGen(options =>
        {
            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Version = "v1",
                Title = "SV Edge",
                Description = "The backend for SV frontend"
            });
        });
    }

    internal static IServiceCollection AddCors(this IServiceCollection services, ICORSPolicySettings corsPolicySettings)
    {
        return services.AddCors(options =>
        {
            options.AddPolicy(name: corsPolicySettings.PolicyName,
                builder =>
                {
                    builder.WithOrigins(corsPolicySettings.AllowedOrigins);
                    // https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/enabling-cross-origin-requests-in-web-api
                    // If you set headers to anything other than "*", 
                    // you should include at least "accept", "content-type", and "origin", 
                    // plus any custom headers that you want to support
                    builder.WithHeaders(HeaderNames.Accept, HeaderNames.ContentType, HeaderNames.Origin);
                    builder.WithMethods
                    (
                        HttpMethod.Get.Method,
                        HttpMethod.Post.Method,
                        HttpMethod.Put.Method,
                        HttpMethod.Delete.Method
                    );
                });
        });
    }
}