const socket = io();
socket.on('connect', () => {
	console.log('Connected!');
	socket.emit('createMessage', {
		to: 'edu@example.com',
		text: 'Yeah'
	});
});

socket.on('disconnect', () => {
	console.log('Disconnected');
});

socket.on('newMessage', (payload) => {
	console.log('New Message');
	console.log(payload);
});

