'use strict';

function fizzbuzz() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        result.push('FizzBuzz');
        //console.log('FizzBuzz');
      } else {
        result.push('Fizz');
        //console.log('Fizz');
      }
    } else if (i % 5 === 0) {
      result.push('Buzz');
      //console.log('Buzz');
    } else {
      result.push(i);
      //console.log(i);
    }
  }
  return result;
}

//fizzbuzz();

module.exports = {
  fizzbuzz: fizzbuzz,
};
