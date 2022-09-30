const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for event
emitter.on('sayWords', (word) => {
  console.log(`say a word!! you punk!! and the word is ${word}`);
});

// creating a event or raise an event
// emitter.emit('sayWords');
setTimeout(() => {
  emitter.emit('sayWords', 'hello sema');
}, 6600);
