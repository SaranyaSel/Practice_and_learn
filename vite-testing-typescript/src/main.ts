const DIRECTIONS = ["N", "E", "S", "W"]

interface MoveParams {
  x: number;
  y: number;
  d: 'N' | 'E' | 'S' | 'W';
  command: 'f' | 'b' | 'r' | 'l';
}

interface MoveResult {
  x: number;
  y: number;
}

export const rover = ({ x, y, d, commands }) => {
  commands.forEach(command => {
    if (command === 'r' || command === 'l') {
      d = turn(d, command === "r" ? +1 : -1)
    } else {
      ({ x, y } = move({ x, y, d, command }));
    }
  })
  return { x, y, d };
}

function turn(d, direction) {
  const new_index = (DIRECTIONS.length + DIRECTIONS.indexOf(d) + direction) % DIRECTIONS.length
  return DIRECTIONS[new_index]
}

function move(params: MoveParams): MoveResult {
  let { x, y, d, command } = params;
  if (command === 'f') {
    if (d === 'N') y++
    if (d === 'E') x++
    if (d === 'S') y--
    if (d === 'W') x--
  } else {
    if (d === 'N') y--
    if (d === 'E') x--
    if (d === 'S') y++
    if (d === 'W') x++
  }
  return { x, y }
}

// const MOVEMENTS = {
//   'N': { f: { x: 0, y: 1 }, b: { x: 0, y: -1 }, },
//   'E': { f: { x: 1, y: 0 }, b: { x: -1, y: 0 }},
//   'S': { f: { x: 0, y: -1 }, b: { x: 0, y: 1 }},
//   'W': { f: { x: -1, y: 0 }, b: { x: 1, y: 0 }},
// };

// function move(params: MoveParams):  MoveResult{
//   let { x, y, d, command } = params;
//   const movement = MOVEMENTS[d][command];
//   return { x: x + movement.x, y: y + movement.y };
// }
