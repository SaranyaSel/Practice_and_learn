export class Rover {
  x: number;
  y: number;
  direction: string;
  commands: string[];
constructor(x: number, y: number, direction: string, commands = []) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.commands = commands;
  if(commands.length > 0) {
    commands.forEach(command => {
      this.processCommand(command);
    });
  }
}
position() {
  console.log('test position', this.x,this.y);
  return [this.x,this.y];
}
forward() {
  if(this.direction === 'N') return this.y++;
  else if(this.direction === 'E') return this.x++;
  else if(this.direction === 'W') return this.x--;
  else return this.y++;
}
processCommand(command: string) {
  if(command === 'f') {
    this.forward();
  }
  this.updatePosition();

}
updatePosition() {
  return [this.x,this.y];
}
}
