import { getFileData } from '../../getFileData';

const inputs = getFileData('/Day13/input.txt');

/**
 * 1. Get list guests
 * 2. Create map has key is pair of guest and value is happiness
 * [Alice, Bob] : 54,
 * [Alice, Carol] : -81,
 * 3. Calculate the happiness of each guest and sum them then find math max
 */
function getGuestHappy(inputs: string[]) {
  const guests = new Map<string, number>();

  inputs.forEach((line) => {
    // Alice would gain 54 happiness units by sitting next to Bob.
    const [guest1, gainOrLose, happiness, guest2] =
      line
        .match(
          /(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)\./
        )
        ?.slice(1) ?? [];
    guests.set(
      `${guest1}-${guest2}`,
      gainOrLose === 'gain' ? parseInt(happiness) : -parseInt(happiness)
    );
  });

  return guests;
}

function generatePermutations(inputs: string[]) {
  const listGuest = new Set<string>();

  inputs.forEach((line) => {
    const [guest1] = line.split(' ');
    listGuest.add(guest1);
  });

  const permutations: string[][] = [];
  const guests = Array.from(listGuest);
  const n = guests.length;

  function swap(arr: string[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function generate(n: number, guests: string[]) {
    if (n === 1) {
      permutations.push(Array.from(guests));
    } else {
      for (let i = 0; i < n - 1; i++) {
        generate(n - 1, guests);
        if (n % 2 === 0) {
          swap(guests, i, n - 1);
        } else {
          swap(guests, 0, n - 1);
        }
      }
      generate(n - 1, guests);
    }
  }

  generate(n, guests);

  return permutations;
}

function KnightsDinnerTable_1(inputs: string[]) {
  let maxHappiness = 0;
  const guestHappiness = getGuestHappy(inputs);
  const seatingArrangement = generatePermutations(inputs);

  seatingArrangement.forEach((seating) => {
    let happiness = 0;
    for (let i = 0; i < seating.length; i++) {
      const guest1 = seating[i];
      const guest2 = seating[(i + 1) % seating.length];
      happiness += guestHappiness.get(`${guest1}-${guest2}`) ?? 0;
      happiness += guestHappiness.get(`${guest2}-${guest1}`) ?? 0;
    }

    maxHappiness = Math.max(maxHappiness, happiness);
  });

  return maxHappiness;
}

console.log(KnightsDinnerTable_1(inputs));
