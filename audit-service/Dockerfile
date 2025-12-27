#1
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
#2
RUN dotnet new webapi -n AuditService
WORKDIR /src/AuditService
RUN dotnet publish -c Release -o /app/publish
#3
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000
ENTRYPOINT ["dotnet", "AuditService.dll"]