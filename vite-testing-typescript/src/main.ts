const DIRECTIONS = ["N", "E", "S", "W"]

export const rover = ({ x, y, d, commands }) => {
  commands.forEach(command => {
    d = turn(d, command === "r" ? +1 : -1)
  })
  return { x, y, d };
}

function turn(d, direction) {
  const new_index = (DIRECTIONS.length + DIRECTIONS.indexOf(d) + direction) % DIRECTIONS.length
  return DIRECTIONS[new_index]
}
