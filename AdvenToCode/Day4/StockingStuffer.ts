import MD5 from 'crypto-js/md5';

function findLowestNumber(secretKey: string) {
  let number = 0;
  while (true) {
    const md5sum = MD5(secretKey + number).toString();
    if (md5sum.startsWith('00000')) {
      return number;
    }
    number++;
  }
}

const secretKey = 'yzbqklnj';
console.log(findLowestNumber(secretKey)); // sh
