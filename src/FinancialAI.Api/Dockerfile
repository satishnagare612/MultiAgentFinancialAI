FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

COPY FinancialAI.sln .
COPY src/FinancialAI.Domain/FinancialAI.Domain.csproj src/FinancialAI.Domain/
COPY src/FinancialAI.Application/FinancialAI.Application.csproj src/FinancialAI.Application/
COPY src/FinancialAI.Infrastructure/FinancialAI.Infrastructure.csproj src/FinancialAI.Infrastructure/
COPY src/FinancialAI.Api/FinancialAI.Api.csproj src/FinancialAI.Api/
COPY tests/FinancialAI.UnitTests/FinancialAI.UnitTests.csproj tests/FinancialAI.UnitTests/
COPY tests/FinancialAI.EvaluationTests/FinancialAI.EvaluationTests.csproj tests/FinancialAI.EvaluationTests/

RUN dotnet restore FinancialAI.sln

COPY . .
RUN dotnet publish src/FinancialAI.Api/FinancialAI.Api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000

ENTRYPOINT ["dotnet", "FinancialAI.Api.dll"]
