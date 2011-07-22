var SERVER_URL = 'http://localhost';
var SERVER_PORT = 1337;


//$.getScript(SERVER_URL+':'+SERVER_PORT + '/socket.io/socket.io.js', function(){

loadSocketio();

//});

function loadSocketio(){
socket = io.connect(SERVER_URL);
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

socket.on('connection', function(data){
});

}
function dance() {
    console.log('lol');
}

function playerControls () {
    playerApi = {
        'pause':GS.player.pause
      , 'resume':GS.player.resume
    }
}
