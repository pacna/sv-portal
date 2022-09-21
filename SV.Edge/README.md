# SV Edge

The edge service for the SV Portal app.

## How to run locally

```bash
# cd src/SV.Edge directory
$ cd src/SV.Edge

# normal mode
$ dotnet run

# normal mode using inmemory
$ dotnet run inmemory=true

# watch mode
$ dotnet watch run

# watch mode using inmemory
$ dotnet watch run inmemory=true
```

## How to run in docker (Optional)

```bash
$ sh build-and-run.sh
```

**note**: Docker only runs using the in-memory implementation.

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
