const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for event
emitter.on('sayWords', () => {
  console.log('say a word!! you punk!!');
});

// creating a event or raise an event
emitter.emit('sayWords');
