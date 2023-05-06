var socket = io();

// socket.on('From-the-Server-to-the-Client',() => {
//     console.log("Receved a call from server");
//     const div = document.createElement('div');
//     div.innerText = 'New event from server';
//     document.body.appendChild(div);
// })

let btn = document.getElementById('btn');
btn.onclick = function exec() {
    socket.emit('from_client');
}

socket.on('from_server', () => {
    const div = document.createElement('div');
    div.innerText = 'New event from server';
    document.body.appendChild(div);
});