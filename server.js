var express = require('express');
var app = express();
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/messagesdb');
var userSchema=require('./User_Schema').userSchema;
var Nicknames = mongoose.model('Nicknames', userSchema);

app.use(express.json());

mongoose.connection.once('open', function(){
    app.use(express.static('front-end/dist/front-end/'))
    app.use('/', express.query());

     app.get('/messaging', function (request, response) {
         var query = Nicknames.find();
         query.exec(function (err, docs){
             console.log(docs);
            response.status(200);
             response.send(JSON.stringify({docs}));
         });
     })

     app.post('/messaging', function (request, response) {
         console.log('post');
         var newNickname = new Nicknames({
             uniqueName: request.body.uniqueName
         });
         console.log(newNickname)
         newNickname.save(function (err, doc) {
             console.log(doc);
             response.status(200);
             response.send(JSON.stringify(doc));
         });
     })

    app.listen(8080, function () {
        console.log('Application is running!');
    })

});

var io = require('socket.io').listen(8001);
var nicknames = {};

io.sockets.on('connection', function (socket) {
    socket.on('user message', function (msg) {
        socket.broadcast.emit('user message', socket.nickname, msg);
        io.sockets.emit('user message', msg);
    })

    socket.on('nickname', function (nick) {
        if (nicknames[nick]) {
            console.log("nickname exists!")
        } else {
            console.log("nickname added!")
            nicknames[nick] = nick;
            socket.nickname = nick;

            io.sockets.emit('nicknames', nicknames);
        }
    })

    socket.on('timer', function (start) {
        if (start) {
            console.log('Timer has started!')
        } else {
            console.log('Timer has stopped!')
        }
    })
})
