# Design and Tech Plan for the Multiplayer Server

Outline of how the multiplayer server will function.

## Problem Question

## Problem Answer

## Details

## Components

**Key**:

> Unless otherwise stated, a mechanism is required.
>
> **is**: Annotates a pivotal feature of a component.
>
> **may**: Annotates a mechanism which is not required.

### User

- [ ] A user is the representation of a player.
- [ ] A user may have a connection to the server.
- [ ] A user may have a serialized list of positive users.
- [ ] A user may have a serialized list of negative users.
- [ ] A user logs in.
- [ ] A user logs out.
- [ ] A user is pinged for connectivity.
- [ ] A user is flagged for loss of connectivity.
- [ ] A user is retained for a certain amount of time since their disconnection.
- [ ] ...
- [ ] Rough Draft
  - [ ]  A user is the representation of a player.
  - [x] A user may have a connection to the server.
  - [x] A user may have a serialized list of positive users.
  - [x] A user may have a serialized list of negative users.
  - [x] A user logs in.
  - [ ] A user logs out.
  - [ ] A user is pinged for connectivity.
  - [ ] A user is flagged for loss of connectivity.
  - [ ] A user is retained for a certain amount of time since their disconnection.
  - [ ] ...

### Message

- [ ] A message is a user input.
- [ ] A message is filtered for exceptionally explicit language. (Socially unacceptable.)
- [ ] A message is encoded as UTF-8.
- [ ] Messages are scanned for flooding.
- [ ] Messages are logged to the database.
- [ ] ...

### Channel

- [ ] A channel may have a serialized configuration.
- [ ] A channel may have N users in its subscribe list.
- [ ] A channel may have N users in its publish list.
- [ ] A channel may have N users in its idle list.
- [ ] A channel may have N users in its positive list.
- [ ] A channel may have N users in its negative list.
- [ ] A channel moves users from subscribe list to idle list when a user goes idle.
- [ ] ...

### Session

- [ ] A session has a list of N>1 users.
- [ ] A session accepts gameplay mechanism data.
- [ ] A session has a player list.
- [ ] A session has a spectator list.
- [ ] A session publishes data to its userlist.
- [ ] A session does not accept user input.
- [ ] A session queries users for idleness.
- [ ] A session removes users for idleness.
- [ ] A session removes users.
- [ ] Modifiers
  - [ ] An option to enforce modifiers across the session. (Ensuring all players are using the same modifiers.)
  - [ ] Modifier settings are supplied to all users, to allow easy "setting".
