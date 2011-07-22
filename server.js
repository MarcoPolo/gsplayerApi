var app = require('express').createServer()
    ,io = require('socket.io').listen(app);


io.sockets.on('connection', function(socket) {
    console.log("NEW CONNECTION YOU GUYS!!");
    console.log(socket);
    socket.emit('news', {hello: 'world'});
    changeMe = function(){
        socket.emit('news', {status: 'pause'});
    }
    tellEmToResume = function() {
        socket.emit('news', {status: 'pause'});
    }
    socket.on('my other event', function(data) {
        console.log(data);
    });
});

io.sockets.on('pause', function(socket) {
    console.log('pause was called!!!!');
});

app.get('/', function(req, res){
    infoToSend  = "loltest\n";
    infoToSend += "<h1> helloWorld";
    alwaysSend = '<script src="http://localhost:1337/socket.io/socket.io.js"></script>'
    alwaysSend += '<script src="http://localhost/jquery-1.6.2.min.js"></script><script src="http://localhost/client.js"></script>';
    res.header('ballz', 'lololol');
    console.log(req.header('Host'));
    
    var method  = req.query.method;
    console.log('method',method);
    console.log('query',req.query);

    
    if (method == 'lol'){
        console.log('lol was called lololol');
        res.send(alwaysSend+'Lol was called, good job lad!');
    }else if(method == 'resume'){
        res.send(alwaysSend + "you called resume i c u");
    }else{
        console.log(req.query);
        res.send(alwaysSend +  infoToSend);

        console.log('lol');
    }
    
});

app.listen(1337);


/*
everyone.now.joinTag = function(tagID){
}

everyone.now.createTag = function(tagID){
    group = nowjs.getGroup(tagID);

}

*/
console.log('Server running at http://127.0.0.1:1337/');
