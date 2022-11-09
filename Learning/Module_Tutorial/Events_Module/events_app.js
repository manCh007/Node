const EventEmitter = require('events');
const emitter = new EventEmitter();

function callEmitter() {
    emitter.emit('messageEmit', {id: 1, name: 'Manab'});
}

emitter.on('messageEmit', function(arg) {
    console.log('Message Logged for ', arg.name);
});

callEmitter();