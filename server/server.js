const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');
	socket.emit('newMessage', generateMessage('Admin', 'Welcome'))
	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User join'));
	// listeners
	socket.on('disconnect', () => {
		console.log('User disconnected');
	});
	socket.on('createMessage', ({from, text}, callback) => {
		socket.broadcast.emit('newMessage', generateMessage(from, text));
		callback({
			success: true
		});
	});
});

server.listen(port, () => {
	console.log(`Listening in port ${port}`);
});
