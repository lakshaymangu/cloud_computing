const socket = io();

document.getElementById('send').onclick = function() {
    const message = document.getElementById('message').value;
    socket.emit('chat message', message);
    document.getElementById('message').value = '';
};

socket.on('chat message', function(msg) {
    const output = document.getElementById('output');
    output.innerHTML += '<p>' + msg + '</p>';
});
