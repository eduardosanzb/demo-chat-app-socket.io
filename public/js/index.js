const $ = jQuery;
const socket = io();
socket.on('connect', () => {
	console.log('Connected!');
});

socket.on('disconnect', () => {
	console.log('Disconnected');
});

socket.on('newMessage', ({ from, text }) => {
	const li = $('<li></li>');
	li.text(`${from}: ${text}.`);
	$('#messages').append(li);
});

$('#message-form').on('submit', e => {
	e.preventDefault();
	const text = $('[name=message]').val();
	socket.emit('createMessage', {
		from: 'User',
		text
	}, res => {
		if(res.success) {
			const li = $('<li></li>');
			li.text(`ME: ${text}.`);
			$('#messages').append(li);
		}
	});
}); 