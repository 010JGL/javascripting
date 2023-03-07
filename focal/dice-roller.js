// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

// make a loop to loop 3 times

let numberOfDices = Number(process.argv.slice(2))  // takes the value from the node command in terminal and convert into variable

const diceRoller = function(min, max) {
  let result = "";                                // Create a variable to store data
  for (let i = 0; i < numberOfDices; i++) {       // loop to roll multiple times (data from the node command)
    min = Math.ceil(1);                           // starts the math random at 1 and up to 7(7 not included)
    max = Math.floor(7);
    if (i < numberOfDices - 1) {                  // adds a , if the index is the number of roll -1. So we dont have a comma at the end
      result += Math.floor(Math.random() * (max - min) + min) + ", ";
    }
    else {
      result += Math.floor(Math.random() * (max - min) + min)   // just adds the random value no comma
    }
  }   
  return result;
};
                          
console.log('Rolled ' + numberOfDices + ' dice: ' + diceRoller());

