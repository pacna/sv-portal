FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env

RUN mkdir /edge
WORKDIR /edge

# Copying the current directory to the /app folder
COPY . /edge
RUN dotnet test

RUN dotnet publish ./src/SV.Edge -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0

WORKDIR /app
COPY --from=build-env /edge/out .
ENTRYPOINT ["./SV.Edge", "--inmemory"]

EXPOSE 5000