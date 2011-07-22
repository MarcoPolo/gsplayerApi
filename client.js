var SERVER_URL = 'http://localhost';
var SERVER_PORT = 1337;


$.getScript(SERVER_URL+':'+SERVER_PORT + '/nowjs/now.js', function(){

//loadSocketio();
playerControls();
now.pause = playerApi.pause;
now.resume = playerApi.resume;
now.test = dance;

});

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
    console.log('lol sent from the server!!');
}

function playerControls () {
    playerApi = {
        'pause':GS.player.pauseSong
      , 'resume':GS.player.resumeSong

    }
}
