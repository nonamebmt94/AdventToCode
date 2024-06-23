export function getFileData(path: string) {
  const fs = require('fs');
  const data = fs.readFileSync(`${__dirname}/AdvenToCode/${path}`, 'utf-8');
  const dataArray = data.split('\n');
  return dataArray;
}
