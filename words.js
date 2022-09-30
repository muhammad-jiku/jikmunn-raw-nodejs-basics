const EventEmitter = require('events');

class Words extends EventEmitter {
  sayWords() {
    console.log(
      'Sema was not respondin and so i started scolding him by sayin...'
    );

    setTimeout(() => {
      // creating a event or raise an event
      this.emit('sayWords', {
        greet: 'hello',
        name: 'sema',
      });
    }, 6600);
  }
}

module.exports = Words;
