const EventEmitter = require('events');
const emitter = new EventEmitter();

function callEmitter() {
    emitter.emit('messageEmit');
}

emitter.on('messageEmit', function() {
    console.log("Message Logged");
});

callEmitter();