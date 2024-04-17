function findLowestNumber(str: string) {
  let hex = '';
  for (let i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16);
  }
  return hex;
}
const secretKey = 'abcdef';
console.log(findLowestNumber(secretKey)); // should output 609043

const secretKey2 = 'pqrstuv';
console.log(findLowestNumber(secretKey2)); // should output 1048970
