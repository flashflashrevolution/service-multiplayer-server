
import Networking from "net";

// The port on which the server is listening.
const port = 7552;

// Use net.createServer() in your code. This is just for illustration purpose.
// Create a new TCP server.
const server = new Networking.Server(OnClientConnection);

// The server listens to a socket for a client to make a connection request.
// Think of a socket as an end point.
server.listen(
    port,
    "127.0.0.1",
    function ()
    {
        console.log(`Server listening for connection requests on socket localhost:${port}.`);
    }
);

const clientList: Networking.Socket[] = [];

// When a client requests a connection with the server, the server creates a new
// socket dedicated to that client.
function OnClientConnection(socket: Networking.Socket)
{
    console.log(socket);
    console.log('A new connection has been established.');

    // Now that a TCP connection has been established, the server can send data to
    // the client by writing to its socket.
    socket.write('Hello, client.');

    clientList.push(socket);
    console.log(clientList);
}
server.on(
    'connection',
    function (socket)
    {
        

        // The server can also receive data from the client by reading from its socket.
        socket.on(
            'data',
            function (chunk)
            {
                console.log(`Data received from client: ${chunk.toString()}.`);
            });

        // When the client requests to end the TCP connection with the server, the server
        // ends the connection.
        socket.on('end', function ()
        {
            console.log('Closing connection with the client');
        });

        // Don't forget to catch error, for your own sake.
        socket.on(
            'error',
            function (error: Error)
            {
                console.log(`Error: ${error.message}`);
            });
    });;
