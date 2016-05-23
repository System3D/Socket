var child = require('child_process').exec('START ./Redis/redis-server.exe')
child.stdout.pipe(process.stdout)
child.on('exit', function() {
  


var app = require('http').createServer(handler);
var io = require('socket.io')(app);

var Redis = require('ioredis');
var redis = new Redis();

app.listen(3000, function() {
    console.log('Server is running!');
});

function handler(req, res) {
    res.writeHead(200);
    res.end('');
}

io.on('connection', function(socket) {
   socket.on('typing', function(data){
		 io.emit('typing-'+data.receiver, {receiver: data.sender});
	});
});

redis.psubscribe('*', function(err, count) {
    //
});

redis.on('pmessage', function(subscribed, channel, message) {

	message = JSON.parse(message);
	console.log('Nova Requisição  No Canal: '+ message.data.data.channel);
    console.log(message.data.data.message);
    io.emit(message.data.data.channel, message);
});
//channels being used: message, kanban, user, typing, chat-misc

})
