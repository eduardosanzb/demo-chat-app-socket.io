const { generateMessage } = require('./message');


describe('Message utils function', () => {
	
	it('should return an message object', () => {
		const message = generateMessage('Edu', 'test');
		expect(message).not.toBeNull();
	});
	it('should from must be equals to Edu', () => {
		const message = generateMessage('Edu', 'test');
		expect(message.from).toBe('Edu');
	});
	
});
