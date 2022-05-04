# SV Edge

The edge service for the SV Portal app.

## How to run locally

```bash
# cd src/SV.Edge folder
cd src/SV.Edge

# normal mode
$ dotnet run

# watch mode
$ dotnet watch run
```

## How to run tests

```bash
# tests
dotnet test
```

## How to run for production

```bash
# cd src/SV.Edge folder
cd src/SV.Edge

# publish
$ dotnet publish -c Release -o server

# cd server folder
$ cd server

# run the binary
$ ./SV.Edge
```
