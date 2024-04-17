/**
 * 1. two dimensional array to store the houses
 * 2. start from the first house
 * 3. new housePosition = new Set()
 * 4 housea
 */
function countHousesWithPresents(directions: string): number {
  let x = 0;
  let y = 0;
  const visitedHouses: { [key: string]: boolean } = { '0,0': true };

  for (const element of directions) {
    switch (element) {
      case '^':
        y++;
        break;
      case 'v':
        y--;
        break;
      case '>':
        x++;
        break;
      case '<':
        x--;
        break;
    }
    visitedHouses[`${x},${y}`] = true;
  }
  console.log(visitedHouses);

  return Object.keys(visitedHouses).length;
}

function trackSanta(
  directions: string,
  positionX: number,
  positionY: number
): {
  x: number;
  y: number;
} {
  let x = positionX;
  let y = positionY;
  switch (directions) {
    case '^':
      y++;
      break;
    case 'v':
      y--;
      break;
    case '>':
      x++;
      break;
    case '<':
      x--;
      break;
  }

  return { x, y };
}

function mergeObjects(
  obj1: { [key: string]: boolean },
  obj2: { [key: string]: boolean }
): { [key: string]: boolean } {
  const merged = { ...obj1, ...obj2 };
  const uniqueKeys = [...new Set(Object.keys(merged))];
  console.log(uniqueKeys);
  return uniqueKeys.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {} as { [key: string]: boolean });
}

function countHousesWithPresentsPart2(directions: string): number {
  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  const visitedHouses1: { [key: string]: boolean } = { '0,0': true };
  const visitedHouses2: { [key: string]: boolean } = { '0,0': true };

  for (let i = 0; i < directions.length; i++) {
    if (i % 2 === 0) {
      const { x, y } = trackSanta(directions[i], x1, y1);
      x1 = x;
      y1 = y;
      visitedHouses1[`${x},${y}`] = true;
    } else {
      const { x, y } = trackSanta(directions[i], x2, y2);
      x2 = x;
      y2 = y;
      visitedHouses2[`${x},${y}`] = true;
    }
  }
  const merged = mergeObjects(visitedHouses1, visitedHouses2);
  return Object.keys(merged).length;
}

console.log(
  countHousesWithPresentsPart2(
    '^><^>>>^<^v<v^^vv^><<^<><<vv^<>^<^v>^vv<>v><vv^^<>>^^^v<<vv><<^>^<^v<^>^v><<<v^<v<<<v<<vv<v<^><^>><>v>v^<<v^^<^v<><^>^<<^^^>v>>v^^<v>>^>vv><v>>^>>v^>^v>^<^^v>^>^^v<v>^^<v<>>v^^v><^><^<<>v^<^<^v<v>v^>>>v^v^>^<>^v<^^vv<v>^>^<>^^<vv^<><<v<^<^^>vv<>^>v<^>^v>v^>^v<>^><>><vv<>v^v<><>v^v>>>>v^^>^><^^<v<^><^<v>>^v^v<>v<<<^<<vvvv<<v^vv^>v^^^<^^^<v>>v<^v>>>>>v<^^^^>v<^<><v>>>>><v>>v^vvvv^^<v^<>^v<^v^>v><^>^v<<>>vv^>v>v^^>vv^<^vvv<>><>><><^^^<v<>^<^^^<v><^v>>v>^v<v^vv^<>^^^>v^^^v>>^v^^<^>>^>^<<v>>>^^<>>^vv>v^<^>>>><v<><><^^v<><<<<^^<>>^<vvv^><>v<v<<<<><v<<v>v<v^><vv<v^>^<^>v^^><^v>^^>v<>^v^<>^vv^><v^^vv>vvv>v>^<vv^>>^>>^>><>>>^^^^v<vv>^<>v^^><v^>^<>v<^^v><v<<><^v><>^^^^^v^v>>^^v><<><<vv>^^^^><^>v>><<<^v>v^^>^v^<^^v>v<^<<>>^v<<<v<<>>v<^v^><vv<v^v>v^<v>><v>^v<<<vv^>v<v>>v>>v><v><v^>v^^v>^v^>>>><>^>v>^v^>>>>v^<<vv<^v><<>v<v^<^^<<v<^v^^v^>vv><vv<v^<^>><^^>^<><^^<v<><^v^v^<^^>^<v><^<v>v^<<<^^v<v>^v>>><>^^>vv<<^v^<<<<^^>>>v>v<<<>^^>>>v>^>v>vv<<>^<^><v^>^^<^<v<<v<^>>^v^<vvv><>v^><<v>^^<v^vv^^^<vvv^<^>^>vv>><^v<^<<v<><<><<^^<><><vv>v>^<v>>^<>>^^v>vv^<^^v>><^vv^<<v^^><<>vv<v<><v<><v^^^v^v>^v<^<>v^^>><>^<^<v^<v^v^>v<<<^<<^>>>^^<^^v>v^<v>vvvv>v<>><^>^<<<<v^<v<>v^^^v<>v>^<v<<^^v^^<>^<<v^^<^<v>v>>v>>v^>^<vv<<<<<^<><>v><>>>v^>^v<^<><<v<^v^^<^<><^>^^^>^><>^><<vv>^<>vv<<v^v<<<<<>>>v<vv>^v>^>^>^<^><>v<><>>>^^<v>^<^v>>^<><v^><v^>>>v<v^^vvv^><v<v>v^>vvvv>>><^>v<>^^^>v>>v^<v<>v^>^<v^>^<<^>^>>v<<><<v^^>>v^<v^<^v^>^>v^><<^<v>v^<v>>^^<<v>v><<<^v^<>^<>^>>^<<v>^^<>^v<>v^>>><<v>><v^>^><v^<><v><>><v^<>vv>v^<^^^>v>^^<vv>>^v<><>>><>><^<>>v>v^^>^^<^^>^>>v>vv^^v<^<^v><vv<v<^>><<vvv<<><^>^v>^^^<<>v^<v<v><<v>^^v<<<>^^vv<^>vv>^>^<><<>vv<^>v^vv>^^^v><<^vv>^v<><v^^^^v^>vv^^<^<>^^v^<^vv<v<vv<>v>v^^<>^^>^^>^<><<^v>^><^^vvvv<><>^<v^^>v<>^><>v>><>vv^<<><<>><>v<^>^v>>^^v><<<>>^<^v^<v<<<v^>^^<^<><><^><<<<^<vv><v<<><vvv^^><vv>^<<vv<<<^v<>>><><>>v><<<v>vvvv^^vv<v>><<^v^vvv><><vv>v><>v<<<^<v^>><^^>v^<v>><v>^^^v^v>><<<v<^^>>^v<>v^<vv^^<<v<v>v<<<<^^^v^v<<>>>v>>vv>^^<><^v<v><>>v^>>>>>^>v^v^<^v^v^vvv>v<v<^>vv^<<v>vv>>v^^vv<^v>>>>vv<>v<>^^vv^<v>v^>>vvv<<<v<<^vv^^^^>v>v>^><<<^>v^><v<^<<<v>^v^^^><<><<<^^<^^<>^<v>^<v<<v<^^vv>v<^v><v><v<>^v<^<v<^<v^v><v>><v<v<<>^<v<>>><>^v^v<<^><v^<<v<v^>^>v><^>^vv^^<v<v<vv<v>^v^v^>^<<>>>>>v^<>^>v^vv^><<>>^^<>v^><v>^vvv^>v^v><>^><<>v>v<^<^><^^vv<<><>>v>>v><vv>>^v<<>^vv<>^vv>v>v>^>^>>><><<>v<v>^<<^v^^<<<><v>>vv<^<vv<vv^<<v<<^v><<>v<^^^<<^v^>^v>^^^v^v>>>v>v^v>^>^vv<^^<<vv^>^<<<vv>v^<><<^vvv^^><>vv^v>v>^><<^^^^vvv^<vvv>><^v<^>^<>>^<v<<vv>>><v>vv^<>><v^<v>^v>^>v>^<^<^^^<<vvvv^>>>>>>>v><vv>^<>^^v^><>><^v^^<v^v<<<<v^>><>v^v<vv<><^<<<<^>^^>vv>><^v<v^v<<>^vvv>v^^><^^<^<>>^^v^vv<>v<^<<<v^^^><v<vv<<>v>v<>^v^><v^vv^v^^v<^^v^^v><>v<^v>><<^<^v^>><<vv<<^>^<<v^<>^><>v><vv^v>>^<v<<<^>vv<^v>^>v<<v>^>>^>>v^<v<v>>^v<^v^v><<><>^><<<><v<vvvv<v^<v^v><>^<>^^^^v>^>^vvvvv>v>>v><<vv<<v<><<^><<^v><<v<<<v><vv<^>^v>>>>^v<^v<<>>^>^<<vv^<^>v>><<^>^>^v><><>^><<v<>v^><<^v^<^^><^^v^<<^v^^>>^v^<^><vv>v^^<<^^^<><>^>v^v>v^>^v^vv>^^>>>>^^<^>>>^^v<vv<><^^<vvv<^^^vv>v<v<v>><<<>^>^^>^>^v<<<<>>^<<>><v>>v>^^<^v<>v<>v^>v^><^<^^><v^^v>^^vv<v<<>><<vv<>>v>^<<<<v<<v>^><^^<^<^<v^<<^^v>^v<^>v^v^<v^vv^>^^><^>v^v>>^^v^><vv<v<v<v>>>>><<><v><v^v^<v^<^^<v<>^>v>v<>>>v>^^^^>><v^v^^v<<<>v^<<^<v>>>><^v^<<><v<>>v><><v<v^v>^v^^<v<^<^^v>><<vv<<vv><>>^>^>vv<^<>^vvv^v<v^^<>v^v>^^<<<<<>^v^>^<>v^^<>v^v<vv>^<>vv^<^vv>><v^^vvvvv>><<>v<vv^<^<vv^v^<>^^<v^<vv^<v^v^v<<^>^>^>^^>>>vvv>^>v>v>>>^>vv^><>^><>v>^^<v^>^><<v>><<<>>v<vvvv^>^v<^<>^<v>^<>^^<<><>^v<><>>>^vv<^<<^<^v>v<<<<<^^v<^v<><v<<><^>v>^v>>^v^><^^^^v<><><>vv^<>vv<^v<^^><v^<^><^^v^v^<^^<<><v>v<v<v^<<^v><>v^v<^>vvv><<^v>>v><><v<<^>>>v<^>>v>^<>><>^<v^v^<vv<<^>v<^^>^<^v<^<<^^v<>>^>^>^v^^v^v<v^^vv^<v>>v><vv^vv>v<>v^>v^^>^^>><v><v^<<><<>><<^^>><^v<v<><<><<><v<v^<^<v>>>><v^^v^^>>>^^^^^<<vv<^><>^<<<vv^^^>^><<<v<^v>^<v<^>^vvv<<>vv><<>v>v^v>>>>>^<>><^^^><<<<v><<vv>>>v<^<vv^v^<<v>>>>^^vvv>v<>><v>>>v>>^v^vvv<<>vvv<<^^^<>vv^^v<<>^^^>>^<^v^<^^>v^><v>>^<<^v<<vv<vv>v^>>^>v^><^><>^>>>vv>><^^^>vv<<^^vv><^<>^>^^<^<>>^vv^>>^v><>v^>>><<<^^<^>^>v<^>^<^^<>>><^^<>^v^<<vvv<v><>vvv><v>v^v<<^<v>^^><<^vv^v>v>v<<^v^<<<>^><><vvv>v>^vv^v<>vv^>^^<^>^>v^^<vv^>v><v<<<><>>^v<^<><><^<v^^<<^<v>vv<><<>v^<v^>^>^^<><<>^<^<<v^^v<v^<><<>v>><^<<>^>^v^v<v^v><^>>^v<^>v<<>^^^<^v>>>^<v>vvvv<<v^<^^>vvvv>v<>v<v><vvvvv>^<><>vvv<>^<<>^>>>>v^<^<><^v>v^>>v><>^><<v^>^<<>^>^v^<v^^>>^v><v>^<v><>v^<^^>v>^>>>v^v>>>^<>^<>>>>>v>>vv^v<><<<><><v><<vv<<v<><>>vv<^<vv>^v<<>v^v<^v<><v>>^v>>vvv^^v>>v>^>^>v><v><^>^^<<>^v<^<<<<^>v<^>>v^<^v>^v<<>^>^vvv<^^vv>^vv>vv<>>v>v<v>>v^<<<<<^^v^>v>^<<<v^v>>v<v><vvv><v>^<vv><<>>^<^>^^<>>>>^<^v<>v^^>^<^^v<^><>><v>>^v^vv<^v<^><<vvv<>><>><^^>^<^v^<^<>v<<<^v>v^^^<>v^<v^>^v^>><>^^<v<^><<^^v^<>^<^vv>>><^v><v^>vv<^v<<<v^>>v>v^v>^<v>v<^<>v^vvv>^vv<<<<v><^><v>>^^>><^v><<^>v^^<<v^^<^<><<<<>^<v<^v^>v<<^^>v<<<<<vvv<v<^>^>^>^>>^>>>v^<<v>>^^v><vv<^v<v<^^^>>>^vvv<^v<>>>vv>^^><^v>vv^>>v>v^<>^<vv>^>^<<^>^^^>>^vv>^^>vvvv<>>^^^^>>>v>v^^>vv>vv^<<>^><^<v^vvvv><v<><v>><<<v<v<<^v><vv^vv^<>>>^>^<v<^v<>><^<vv^^><v>v^>v^<><v^vvv>^>v^^v^>^^>v<<<<^<<^>>v>v^^^<<<v>>>^^v>v<v><<<<^^^v>^vv^>><>^v<v<<^^<<<<><>>>v>vvv^v^^v^>>vv>^>><>^v><^v^><^^>vv>^<^<^>><v>v>><><><v>^>^>v>vv>vv>^^>v>v^><v<<v^<>^>^v>^^v>^<^v<>>vvv^^>^>vv<v<v<<^<^<v^<>v^^v<^<^>vv^^<v><^^^>v>vv<<v>v<<v^<v^^><vv>^>^v^<^>v<^>^<>vv^><v<^><>>^>>^<^><<>^<^>v>v><>>>^<<^><<v><^v<v><>>vv<^><v^>>v>v>>>>^^>v<^v^>><<^<>>v><^><<^>^<vv^^<><<>><vvvv^>^^<><^^v>^^>vv>^v<v>>^^v^<v<^><^<<>>v^^^<^><^<<><<v<>><<>^v>vvv^vvv^^>>^<^<v>><>^<<<<^^<>>>v^<<^^v>><><<v<^>v>^v<v^>v>vv^><>^><<><^^>^>^<><>><^^<v^v<^><><><v>^<v<<v^<<^^^v<v<^v<>>><^v<<<<>>^v>^^vv^v^<<v>><<<v>vv>>v>>^v^<>>vv^<^>^<<>v<<<^vv<^vv^vv<^v^^^<vv^>v>>v<^^<^^vvv<^^v<>>>^>v^><v>^^><>vv>v>v<<<^^v<^vv^v>^^^>>>^^<>^^<^vvv>><><<><^<v>><<>^>^^<v^v^>vv>vv<v>^^<^^<<><><<v><v^^>v><v><<>v>vvv<^^^^<^>>><<<^^^<^>vv^^v>>v<<v^^<vv^<^>vvv^^v^^<^<vv>v<^<>^<<vv^^>^v>>^><><>v<v<v<>><v>>>^^>>v^><v^^<^>><>v<><<v^v<v<<>>>><>>>>><<^vvv<<><><<>^><><<^^v><<^>v>^>^v>v>>^^<><^>vv<^<^v>v<><^<<v<><^><>^^^<v^<><vvv^^^<>^^v><v<<<v>><>^>^vv<v^<vv>v>v^vv<v^v<v>^v^>v><>v^><>v>^^^^><<vv^><v<<v<^<>^v^^^>^^><<<v<^<v^>^^>v><vvvvv^<^<v^^>v<^v^^vv^<<<<v><^>v>v^v><><v^<<^<<v<^^^>^><v^v^<><><>^v<v>^<>^v>^v>v^<><^><v>>v<<^><^vv^<><^<>><>><v<v><<^^^^>v<^<^vv<><^vv><<^<<v>v^>>^v>^>v^^v>vv<v>v<<v>v<>^>>vv^>>><>^v^^<^>v<<^<^^v^^v^<<v<<v<^v<>vv^<v>><^v<^>>>vv^^<v^<>^^v<v<v>>^><^^^<><<^^>v<<vv>><<vvv>><<v^v^>><>vv^><<^>^><^v<^<^<vv<^^vv>v^v<<<<<<><<vv^vv>vv>v<^><<><><<>>v>><v><^>^v>^v^<>v^^^><^^<<<^vv^vv>^v^vvv^^>v^<v>><^<^<^<>^vv<vv^v^^>^^^>vv^v>>><<<^<>>v>v<^^<><v>>><><^v^^<<><<<>^<^^v^>v<vv^^^^>><v><^<<v<<v<>^>^>>^<>^v><>>^<v<vv^<<^<<>vv^>^^<<<^v<>>^v<>vvv<<^^<<><vvvvv<<^<^^<>>>>^^<><>^><>^v<v^^v<<v^^<^<^>v<v>^v<^>^v<>v^vv<><<v>^vvv<><<^>>^^><><>^<>^>v^^v^><v<><>>v><v^<v<<v>><^v>^<v<^>v<<<>vvv^<^^v<vvv^vv<>^<>^>>v<>^^><><v>>^><^^vv>><<>><v><^><>>^vv>v<vv<>v^v^^v<<^^<vv>v^^vv<<^<<><>^<><v^><^<^<>>^vv<v>v>>^<^vv>^vv^>v>^<><^><^<>v^v^^<^<>^^v>>><^v<>v^v<<^>v><>^^<<v^v<>v^>>v>^<><vv^v<v^<vv<>^>^>^<^>v><<><><><<<>^>><v^^><^>><v>>^v<<<^<<>^><<^>>>>>v<^>v>>v^<v^>^>v^^><>v^v^vvvv<v<v<>v>>><<>^<<vvv><v^v^>v<v^^^>>^<v>>^vv^^<vv><^>>v<v^><vvv<^^>>vv^v<^<>^v^<<v>^<<><<<^vvv^>^^<<>>><v<^>vv<<^<><^v<^<><<^^>vv^v>v^^^>>>>^>vv<<v>v>>^^v^^><>v<<^><^<v^>>^>v^v>><^v^>v<<^<v><^<^<^<>>v^^>><<<>v<v>v<^^>^vv<<<^^<v<>v^^>v<<><^<>^^>^v<>v>><^^^vv^>^><>v^^<v^<>>^<v^^^><v<><vvv>v>^<<^v>^>>>>><^^^<>v<v>>v^^<^v^>>v^<<v^>^>v^v>>>>^>>vv<>^<^v><v^^<>v>v^v>^<>^>v<vv><<v<^v<<^v<<^v^vv<><>^<>>^<>>^<>v^><<>^v>>^^^^<<^v><>^<^>^^v><^^<^<v^<^^v>^v><vv>v<<^>^>><<^^^vvv<<^vv<^^>v^^vv^<^^<<^^>>^^<vv<v<<v^^<<v<^vvv<<><<v>v^>>v^^>v<^>^><v<^>v<v^v<v^^<>v>><<v^v^v<^^^><v>v><^<^vv>^^v>^>v<<^vv><^^^^^^><<^>>>^v<>^^v<<<>><<<v^><>^<<<v>v^>^^^<^><v>^^^v<<>v<v>^<v^>><<^^<<^v<<>^v>>vv>><v<^><v<<<vvv><vv><<^v^^<v^vvv<^v>>v^v<v^v^>>^^v<><^^^<^^>v>^<><v<<v^^>vvv^v^^<v<v^v>^>v^^v<^><v^^<<<<>^^>>^v<><^><^<<^vv^<><<>v^vv^<v^<><<<^^>v<<>>>v<>v<><<<v>^v>^^v>^^>v>^>^>v<>><>^>^>^vvvv<^<v^<>^^^^v>v>><<v>>^<vv>>^<v<^v^vv>><>^^>v^^<<><^<v>><<<<>v>^^><v^^v<<v<><vv^v>^<v^^>v<<<<v^v<<>>vv<v<<<v>v>>v<^v>>v>v^<<<>^>^>^<>v<^^vv><^v<<^v<vvv^vv>v<^<<^^vv^^>vv<^>v>^^<<v^<<^^v<>^>v<<^^<^>^^^v^^<v<^<^>>>v^vv^<^v>^<>^<^<v<^v>>>^<^v<><v<^vv<v>v><v^v^^v<vv><^^<><>^>v<^<^vv>><^v><v<>^<>^^>^<><<<v^>>^<>><<><v>vvv^<<^<vv<v><v<^<<<^>^>>v<^>>vv>^v^^^v<>v<>><>^vv^>vv^'
    // '^>v<'
  )
);
