import { getFileData } from '../../getFileData';

const instructions = getFileData('Day7/input.txt');
const instructionMap = new Map();

instructions.forEach((instruction: string) => {
  const [input, output] = instruction.split(' -> ');
  instructionMap.set(output, input);
});

const AssemblyRequired = (
  wire: any,
  cache: { [key: string]: any } = {}
): any => {
  // If the wire's value is already calculated, return it
  if (cache[wire] !== undefined) return cache[wire];

  // If the wire's value is a direct number, return it
  if (!isNaN(parseInt(wire))) return parseInt(wire);

  const instruction = instructionMap.get(wire);
  const parts = instruction.split(' ');
  let signal;

  if (parts.length === 1) {
    // Direct signal or wire reference
    signal = AssemblyRequired(parts[0], cache);
  } else if (parts.length === 2) {
    // NOT operation
    signal = ~AssemblyRequired(parts[1], cache) & 0xffff;
  } else if (parts.length === 3) {
    // AND, OR, LSHIFT, RSHIFT operations
    const left = AssemblyRequired(parts[0], cache);
    const right = AssemblyRequired(parts[2], cache);
    switch (parts[1]) {
      case 'AND':
        signal = left & right;
        break;
      case 'OR':
        signal = left | right;
        break;
      case 'LSHIFT':
        signal = (left << right) & 0xffff;
        break;
      case 'RSHIFT':
        signal = left >> right;
        break;
    }
  }

  // Cache and return the signal
  cache[wire] = signal;
  return signal;
};

console.log(AssemblyRequired('a'));
