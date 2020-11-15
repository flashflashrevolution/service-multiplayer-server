import Networking from "net";

//////////////////////////////
// Simple user login logic. //
//////////////////////////////
interface UserLogin
{
    token: string;
    username: string;
    toString(): string;
}

function ServerRecievedALogInRequestFromAUser(username: string, token: string): Promise<UserLogin>
{
    const userLogin: UserLogin =
    {
        token: token,
        username: username,
    };

    if (username != "" && token != "")
    {
        return Promise.resolve(userLogin);
    }
    else
    {
        return Promise.reject(userLogin);
    }
}

function ServerAcceptedTheLoginRequest(userLogin: UserLogin): Promise<UserLogin>
{
    console.log("Fake logged in the user: ", userLogin);
    return Promise.resolve(userLogin);
}

function ServerRejectedTheLoginRequest(userLogin: UserLogin): Promise<UserLogin>
{
    return Promise.resolve(userLogin);
}

function LoginRejectionFailed(userLogin: UserLogin): void
{
    console.log("Failed to reject the login of the user properly: ", userLogin);
}

const loginValidator = ServerRecievedALogInRequestFromAUser("zageron", "myVeryValidToken");
const loginAccepted = loginValidator.then(ServerAcceptedTheLoginRequest);
const loginRejected = loginAccepted.catch(ServerRejectedTheLoginRequest);
loginRejected.catch(LoginRejectionFailed);

enum UserRelationshipAlignment
{
    POSITIVE,
    NEGATIVE,
}

interface UserRelationship
{
    primaryUser: string,
    targetUser: string,
    alignment: UserRelationshipAlignment,
}


////////////////////////////////////
// Simple user relationship logic //
////////////////////////////////////

function ServerAcceptRequestToAddUserToPositiveRelation(
    requesterId: string,
    userToAdd: string,
    relationshipAlignment: UserRelationshipAlignment): Promise<UserRelationship>
{
    const relationship: UserRelationship =
    {
        primaryUser: requesterId,
        targetUser: userToAdd,
        alignment: relationshipAlignment,
    };

    return Promise.resolve(relationship);
}

function ServerAppliesTheAcceptedAddRelationshipRequest(relationship: UserRelationship): Promise<UserRelationship>
{
    // Do apply stuff
    return Promise.resolve(relationship);
}

function SomethingElse(relationship: UserRelationship)
{
    console.log("Accepted relationship save failed: ", relationship);
}

const relationshipValidator =
    ServerAcceptRequestToAddUserToPositiveRelation("zageron", "andrew_wcy", UserRelationshipAlignment.POSITIVE);
const relationshipAccepted = relationshipValidator.then(ServerAppliesTheAcceptedAddRelationshipRequest);
relationshipAccepted.catch(SomethingElse);


///////////////////////////////////
// Ping a user for connectivity. //
///////////////////////////////////

// How do we represent a connect to a client when we are speaking through a single socket.
function QueryUserForUserClient(user: User)
{
    // Search map of user
    console.log(user);
    return;
}

function ServerInitiatesARequestToUserClientForConnectivityPing(user: User)
{
    console.log(user);
    return;
}

QueryUserForUserClient({ connected: true });
ServerInitiatesARequestToUserClientForConnectivityPing({ connected: true });


function ServerReceivedASocketConnectionFromClient(socket: Networking.Socket): Promise<UserClient>
{
    if (socket.remoteAddress == "blacklistedIpLookup?")
    {
        return Promise.reject();
    }
    else
    {
        const userClient: UserClient =
        {
            connection: socket,
            lastConnected: new Date(),
        };

        return Promise.resolve(userClient);
    }
}

function ServerInitializesUser(userClient: UserClient): Promise<UserClient>
{
    clientList.push(userClient);
    return Promise.resolve(userClient);
}

function ServerCouldNotInitializeUser(userClient: UserClient): void
{
    console.log("Couldnot initialize UserClient: ", userClient);
}

const newSocket = new Networking.Socket();
const connectionValidation = ServerReceivedASocketConnectionFromClient(newSocket);
const initializeUser = connectionValidation.then(ServerInitializesUser);
initializeUser.catch(ServerCouldNotInitializeUser);

const clientList: UserClient[] = [];
console.log(clientList);

interface UserClient
{
    connection?: Networking.Socket;
    lastConnected?: Date;
}

interface User
{
    connected: boolean;
    positiveUsers?: User[];
    negativeUsers?: User[];
}

// Connect the user.
// Check if the user exists in userlist already.
// Deserialize user from database if the user does not exist.
// Clensing? (Should users even bother to be deleted from the server.
//  Seems like a problem for large servers, not small ones.)

const connectedUser: User[] = [{ connected: true }];
console.log(connectedUser);
