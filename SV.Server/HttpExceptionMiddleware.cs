using System;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace SV.Server
{
    internal class HttpExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public HttpExceptionMiddleware(RequestDelegate next)
        {
            this._next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await this._next.Invoke(context);
            }
            catch (HttpException ex)
            {
                HttpResponse response = context.Response;

                int statusCode = (int)ex.StatusCode;

                if (IsServerSideError(statusCode: statusCode))
                {
                    Console.WriteLine("Server exception");
                    return;
                }

                response.StatusCode = statusCode;
                response.ContentType = "application/json; charset=utf-8";

                await response.WriteAsync(JsonSerializer.Serialize
                (
                    new
                    {
                        Message = ex.Message,
                        StatusCode = statusCode
                    },
                    new JsonSerializerOptions()
                    {
                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                    }
                ));
            }
        }

        private bool IsServerSideError(int statusCode)
        {
            return statusCode >= 500 && statusCode <= 599;
        }
    }
}