const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

io.on('connection', (socket) => {
    console.log('a user connected');

    // setInterval( () => {
    //     socket.emit("From-the-Server-to-the-Client");
    // } , 2000)

    socket.on('from_client', () => {
        console.log("event coming from client");
    })

    setInterval(() => {
        socket.emit('from_server');
    }, 2000);

  });

server.listen( 3000 , () => {
    console.log("Server started on port 3000");
}) 