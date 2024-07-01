import { getFileData } from '../../getFileData';

const input = getFileData('Day8/input.txt');
// const input = ['"abc"', '"aaa\"aaa"', '"\x27"'];

const Matchsticks2 = (inputs: string[]) => {
  let numChar = 0;
  let numCharInMemory = 0;
  inputs.forEach((line: string) => {
    numChar += line.length;
    // Subtract 2 for the quotes, replace escape sequences and count their memory representation
    const memoryChars =
      '"' + line.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    numCharInMemory += memoryChars.length;
  });

  return numCharInMemory- numChar;
};

console.log('Day 8: Matchsticks', Matchsticks2(input));
