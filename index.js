const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const connect = require('./config/database-config.js');


app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('msg_send', (data) => {
        console.log(data);
        io.emit('msg_rcvd', data);
        // socket.emit('msg_rcvd', data)
        // socket.broadcast.emit('msg_rcvd', data)
    })


  });

server.listen( 3000 ,async () => {
    console.log("Server started on port 3000");
    await connect();
    console.log("MongoDB connected");
}) 