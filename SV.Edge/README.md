# SV Edge

SV.Edge serves as the backend infrastructure for SV Portal.

## Prerequisites

Before setting up SV.Edge, please ensure you have the following tools and components installed:

1. [.NET Core](https://dotnet.microsoft.com/en-us/download)
2. [PostgreSQL](https://www.postgresql.org/download/)
3. [Docker](https://docs.docker.com/get-docker/) (optional)

## How to Run Locally

Navigate to the `src/SV.Edge` directory:

```bash
$ cd src/SV.Edge
```

For normal mode:

```bash
$ dotnet run
```

For normal mode using in-memory storage:

```bash
$ dotnet run --inmemory
```

For watch mode:

```bash
$ dotnet watch run
```

For watch mode using in-memory storage:

```bash
$ dotnet watch run --inmemory
```

## How to Run in Docker (Optional)

You can run SV.Edge using Docker with the following command:

```bash
$ sh build-and-run.sh
```

**note**: Docker only runs using the in-memory implementation.

## How to run tests

To run tests, use:

```bash
$ dotnet test
```

## How to Run for Production

Follow these steps to run SV.Edge in a production environment:

Navigate to the `src/SV.Edge` directory:

```bash
$ cd src/SV.Edge
```

Publish the project:

```bash
$ dotnet publish -c Release -o server
```

Navigate to the `server` directory:

```bash
$ cd server
```

Run the binary:

```bash
$ ./SV.Edge
```
