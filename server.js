var app = require('express').createServer();
var nowjs = require('now');
var everyone = nowjs.initialize(app);

app.get('/', function(req, res){
    infoToSend  = "loltest\n";
    infoToSend += "<h1> helloWorld";
    alwaysSend = '';
    res.header('ballz', 'lololol');
    console.log(req.header('Host'));
    
    var method  = req.query.method;
    var groupName  = req.query.groupName;
    console.log('method',method);
    console.log('query',req.query);

    
    if (method == 'lol'){
        console.log('lol was called lololol');
        everyone.now.test();
        res.send(alwaysSend+'Lol was called, good job lad!');

    }else if(method == 'pause'){
        everyone.now.pauseGroup(groupName);
        res.send(alwaysSend + "you called pause i c u");

    }else if(method == 'resume'){
        everyone.now.resume();
        res.send(alwaysSend + "you called resume i c u");

    }else{
        console.log(req.query);
        res.send(alwaysSend +  infoToSend);

        console.log('lol');
    }
    
});

app.listen(1337);

everyone.now.pauseGroup = function(Groupname){
    var group = nowjs.getGroup(Groupname);
    group.now.pause();

}

everyone.now.resumeGroup = function(Groupname) {
    var group = nowjs.getGroup(Groupname);
    group.now.resume();

}

everyone.now.joinGroup = function(Groupname) {
    console.log('user data',this.user);
    var group = nowjs.getGroup(Groupname);
    this.user.groupName = Groupname;
    group.addUser(this.user.clientId);
}


everyone.now.leaveGroup = function  () {
    var group = nowjs.getGroup(groupName);
    var groupName = this.user.groupName;
    console.log('group data',this.user.groupName);
    group.removeUser(this.user.clientId);
}

everyone.on('disconnect', function(){
    this.now.leaveGroup(this.user.groupID);
});

console.log('Server running at http://127.0.0.1:1337/');
