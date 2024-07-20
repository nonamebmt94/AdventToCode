function isValidPassword(password: string) {
  let hasStraight = false;
  for (let i = 0; i < password.length - 2; i++) {
    if (
      password.charCodeAt(i + 2) === password.charCodeAt(i + 1) + 1 &&
      password.charCodeAt(i + 1) === password.charCodeAt(i) + 1
    ) {
      hasStraight = true;
      break;
    }
  }

  if (!hasStraight) {
    return false;
  }

  if (
    password.includes('i') ||
    password.includes('o') ||
    password.includes('l')
  ) {
    return false;
  }

  let pairCount = 0;
  for (let i = 0; i < password.length - 1; i++) {
    if (password.charAt(i) === password.charAt(i + 1)) {
      pairCount++;
      i++; // skip the pair we just counted
    }
  }
  if (pairCount < 2) {
    return false;
  }

  return true;
}

function incrementPassword(password: string): string {
  let newPassword = password.split('');

  for (let i = newPassword.length - 1; i >= 0; i--) {
    if (newPassword[i] === 'z') {
      newPassword[i] = 'a';
    } else {
      newPassword[i] = String.fromCharCode(newPassword[i].charCodeAt(0) + 1);
      break;
    }
  }

  return newPassword.join('');
}

function CorporatePolicy(password: string) {
  let nextPassword = incrementPassword(password);

  while (!isValidPassword(nextPassword) && nextPassword !== password) {
    nextPassword = incrementPassword(nextPassword);
  }

  return nextPassword;
}

console.log(CorporatePolicy('hxbxwxba'));
