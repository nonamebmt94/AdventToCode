import { getFileData } from '../../getFileData';

const input = getFileData('Day8/input.txt');

const Matchsticks1 = (inputs: string[]) => {
  let numChar = 0;
  let numCharInMemory = 0;
  inputs.forEach((line: string) => {
    numChar += line.length;
    // Subtract 2 for the quotes, replace escape sequences and count their memory representation
    const memoryChars = line
      .substring(1, line.length - 1) // Remove surrounding quotes
      .replace(/\\\\/g, 'X') // Replace \\ with X (1 char)
      .replace(/\\"/g, 'X') // Replace \" with X (1 char)
      .replace(/\\x[0-9A-Fa-f]{2}/g, 'X'); // Replace \xHH with X (1 char)

    numCharInMemory += memoryChars.length;
  });

  return numChar - numCharInMemory;
};

console.log('Day 8: Matchsticks', Matchsticks1(input));
