# SV Edge

The edge service for the SV Portal app.

## How to run locally

```bash
# normal mode
$ dotnet run

# watch mode
$ dotnet watch run
```

## How to run for production

```bash
# publish
$ dotnet publish -c Release -o server

# cd server folder
$ cd server

# run the binary
$ ./SV.Edge
```
