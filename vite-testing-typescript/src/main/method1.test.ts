'use strict';
import { beforeEach, describe, expect, test } from 'vitest';
import { Rover } from './method1';


describe('mars rover', () => {
  test('initialises at the given coordinates 0,0 and direction N, return "0, 0"', () => {
    const rover = new Rover(0, 0, 'N');
    expect(rover.position).toEqual("0, 0");
  });

  test('initialises at the given coordinates 0,0 and direction N, and commands ["b"], return "0, -1"', () => {
    const rover = new Rover(0, 0, 'N', ['b']);
    expect(rover.position).toEqual("0, -1");
  });
});
