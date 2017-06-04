const socket = io();
socket.on('connect', () => {
	console.log('Connected!');
});

socket.on('disconnect', () => {
	console.log('Disconnected');
});

socket.on('newMessage', (payload) => {
	console.log('New Message');
	console.log(payload);
});

