# Multiplayer Server

***Rought Draft*** - No guarantee for commands below to function.
***NOTE*** These currently run in the Patreon database, so migrations will fuck up the migration table.
Please don't run them, or delete the migration entry that gets added.

Successor to the existing FFR multiplayer server implementation.

[![code style: eslint](https://img.shields.io/badge/code_style-eslint-8080F2.svg?style=flat-square)](https://github.com/eslint/eslint)

- [Multiplayer Server](#multiplayer-server)
  - [Generating Migrations](#generating-migrations)
  - [Running Migrations](#running-migrations)
  - [Building and Running in Docker for Testing](#building-and-running-in-docker-for-testing)

## Generating Migrations

1. Create ormconfig.production and fill out database credentials. (Do not submit.)

2. > ```bash
   > npm run typeorm migration:generate -- --name initialize --connection multiplayer --config ormconfig.production
   > ```

3. Commit the migration.

## Running Migrations

```bash
npm run typeorm migration:run -- --connection multiplayer --config ormconfig.production
```

## Building and Running in Docker for Testing

```bash
# Fill out your github access token here. (The one for NPM.)
NPM_TOKEN=YOUR_ACCESS_TOKEN
docker build -t ghcr.io/flashflashrevolution/service-multiplayer-server:dev --build-arg NPM_TOKEN=${NPM_TOKEN} .
docker container run --env-file .env <image-id> -p 8081:8081
```
