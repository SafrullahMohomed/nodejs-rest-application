const EventEmitter = require('events');

const emitter = new EventEmitter();

// to add an event listner
emitter.on('Lon', (e) =>{
    console.log('the message is', e.id);
})

emitter.emit('Lon', {id: 1, url: 'http://localhost'})