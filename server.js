const EventEmitter = require('events');

const emitter = new EventEmitter();

// register a listener for event
emitter.on('sayWords', (word) => {
  console.log(
    `say a word!! you punk!! and then ${word?.name} says ${word?.greet}`
  );
});

// creating a event or raise an event
// emitter.emit('sayWords');
setTimeout(() => {
  emitter.emit('sayWords', {
    greet: 'hello',
    name: 'sema',
  });
}, 6600);
