'use strict';

export class Rover {
  constructor(x, y, direction, commands = []) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.updatePosition();
    if (commands.length > 0) {
      commands.forEach((command) => {
        this.processCommand(command);
      });
    }
  }

  processCommand(command) {
    if (command === 'f') {
      this.forward();
    } else if (command === 'b') {
      this.backward();
    }
    this.updatePosition();
  }

  forward() {
    if (this.direction === 'N') {
      this.y = this.y + 1;
    } else if (this.direction === 'E') {
      this.x = this.x + 1;
    } else if (this.direction === 'S') {
      this.y = this.y - 1;
    } else {
      this.x = this.x - 1;
    }
  }

  backward() {
    if (this.direction === 'N') {
      this.y = this.y - 1;
    } else if (this.direction === 'E') {
      this.x = this.x - 1;
    } else if (this.direction === 'S') {
      this.y = this.y + 1;
    } else {
      this.x = this.x + 1;
    }
  }

  updatePosition() {
    this.position = `${this.x}, ${this.y}`;
  }
}
