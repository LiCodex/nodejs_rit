var io = require('socket.io')(3000);
var login = require('./login');
require('./Keys');

io.on('connection', function(socket)
  console.log('connection');
  socket.emit("connected");
);
