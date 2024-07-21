import { getFileData } from '../../getFileData';

const inputs = getFileData('/Day12/input.txt');

function isHasRedColor(data: object): boolean {
  const values = Object.values(data);

  return values.includes('red');
}

function sumNumbers(data: number | object | any[]): number {
  let sum = 0;

  if (typeof data === 'number') {
    sum += data;
  }

  if (Array.isArray(data)) {
    data.forEach((element) => {
      sum += sumNumbers(element);
    });
  } else if (typeof data === 'object' && !isHasRedColor(data)) {
    Object.values(data).forEach((val) => {
      sum += sumNumbers(val);
    });
  }

  return sum;
}

const JSAbacusFramework = (input: string) => {
  const data = JSON.parse(input);
  const sum = sumNumbers(data);

  return sum;
};

console.log(JSAbacusFramework(inputs));
