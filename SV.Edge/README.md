# SV Edge

The edge service for the SV Portal app.

## Prerequisites

1. [.NET Core](https://dotnet.microsoft.com/en-us/download)
2. [PostgreSQL](https://www.postgresql.org/download/)
3. [Docker](https://docs.docker.com/get-docker/) (optional)

## How to run locally

```bash
# cd src/SV.Edge directory
$ cd src/SV.Edge

# normal mode
$ dotnet run

# normal mode using inmemory
$ dotnet run --inmemory

# watch mode
$ dotnet watch run

# watch mode using inmemory
$ dotnet watch run --inmemory
```

## How to run in docker (Optional)

```bash
$ sh build-and-run.sh
```

**note**: Docker only runs using the inmemory implementation.

## How to run tests

```bash
# tests
$ dotnet test
```

## How to run for production

```bash
# cd src/SV.Edge directory
$ cd src/SV.Edge

# publish
$ dotnet publish -c Release -o server

# cd server directory
$ cd server

# run the binary
$ ./SV.Edge
```
