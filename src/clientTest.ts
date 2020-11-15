import Networking from "net";

const client = Networking.createConnection(
    { port: 7552 },
    () =>
    {
        // 'connect' listener.
        console.log('connected to server!');
        client.write('world!\r\n');
    });

client.on(
    'data',
    (data) =>
    {
        console.log(data.toString());
        client.end();
    });

client.on(
    'end',
    () =>
    {
        console.log('disconnected from server');
    });
