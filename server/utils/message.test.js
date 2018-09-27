let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () =>{
        let from = 'me';
        let text = 'Some message';
        let message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text})

        generateMessage()
    })
});

describe('generateLocation', () => {
    it('should generate location object', () =>{
        let from = 'me';
        let latitude = 48.7305384;
        let longitude = 37.6141806;
        let location = generateLocationMessage(from, latitude, longitude);
        expect(location.createdAt).toBeA('number');
        expect(location).toInclude({from, latitude, longitude});

        generateMessage()
    })
});