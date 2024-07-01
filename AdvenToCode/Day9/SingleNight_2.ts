import { getFileData } from '../../getFileData';

const inputs = getFileData('/Day9/input.txt');

function prepareData(inputs: string[]): {
  locations: string[];
  distances: { [key: string]: number };
} {
  const locations: Set<string> = new Set();
  const distances: { [key: string]: number } = {};
  inputs.forEach((input) => {
    const [start, , end, , distance] = input.split(' ');
    locations.add(start);
    locations.add(end);
    distances[`${start}-${end}`] = Number(distance);
    distances[`${end}-${start}`] = Number(distance);
  });
  return {
    locations: Array.from(locations),
    distances,
  };
}

function generatePermutations(array: string[]): any {
  if (array.length <= 2) {
    console.log('array', array);
    return array.length === 2 ? [array, [array[1], array[0]]] : [array];
  }
  return array.reduce(
    (acc, item, i) =>
      acc.concat(
        generatePermutations([...array.slice(0, i), ...array.slice(i + 1)]).map(
          (val: string) => [item, ...val]
        )
      ),
    []
  );
}

function calculationDistance(
  route: string[],
  distances: { [key: string]: number }
): number {
  let total = 0;
  for (let i = 0; i < route.length - 1; i++) {
    const distance = distances[`${route[i]}-${route[i + 1]}`];
    if (!distance) continue;

    total += distance;
  }
  return total;
}

function SingleNight_2(inputs: string[]): number {
  const { locations, distances } = prepareData(inputs);

  const allRoutes = generatePermutations(locations);
  const allDistances = allRoutes.map((route: string[]) => {
    return calculationDistance(route, distances);
  });

  return Math.max(...allDistances);
}

console.log(SingleNight_2(inputs)); // Output: 0
