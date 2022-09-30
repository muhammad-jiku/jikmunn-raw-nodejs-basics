const Words = require('./words');

const words = new Words();

// register a listener for event
words.on('sayWords', (word) => {
  console.log(
    `say a word!! you punk!! and then ${word?.name} says ${word?.greet}`
  );
});

// creating a event or raise an event
words.sayWords();
