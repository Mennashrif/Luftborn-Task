using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using ReportSystem.API.Middlewares;
using ReportSystem.Application;
using ReportSystem.Domain.Entities.UserEntity;
using ReportSystem.Infrastructure;
using ReportSystem.Infrastructure.Context;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowCors",
        builder =>
        {
            builder
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins("http://localhost:3000")
                        .SetIsOriginAllowed((host) => true)
                        .AllowCredentials();
        });
});

builder.Services.AddApplicationDependencies();
builder.Services.AddInfrastructureDependencies(builder.Configuration);

builder.Services.AddAuthentication(x =>
    {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })

.AddJwtBearer(options =>
{
    var signingKey = Convert.FromBase64String(builder.Configuration["Jwt:Key"]);
    options.TokenValidationParameters = new TokenValidationParameters
    {
        //      NameClaimType = ClaimTypes.NameIdentifier,
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration.GetValue<string>("Jwt:Issuer"),
        ValidateAudience = true,
        ValidAudience = builder.Configuration.GetValue<string>("Jwt:Audience"),
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(signingKey),
        ValidateLifetime = true
    };
});
builder.Services.AddAuthorization(options =>
{
    options.FallbackPolicy = options.DefaultPolicy;
});
#region Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.AddSecurityDefinition(
    "token",
    new OpenApiSecurityScheme
    {
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer",
        In = ParameterLocation.Header,
        Name = HeaderNames.Authorization
    }
        );
    c.AddSecurityRequirement(
    new OpenApiSecurityRequirement
    {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "token"
                            },
                        },
                        Array.Empty<string>()
                    }
    }
        );
});
#endregion Swagger

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseMiddleware<ExceptionMiddleware>();

using (var serviceScope = app.Services.CreateScope())
{

    var dbContext = serviceScope.ServiceProvider.GetRequiredService<DatabaseContext>();
    var userManager = serviceScope.ServiceProvider.GetRequiredService<UserManager<User>>();
    var roleManager = serviceScope.ServiceProvider.GetRequiredService<RoleManager<AspNetRole>>();
    var serviceProvider = serviceScope.ServiceProvider;
    if (!serviceScope.ServiceProvider.GetService<DatabaseContext>().AllMigrationsApplied())
    {
        serviceScope.ServiceProvider.GetService<DatabaseContext>().Migrate();
    }
    await SeedContext.Seed(dbContext, userManager, roleManager);
}
app.UseCors("AllowCors");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.Run();
