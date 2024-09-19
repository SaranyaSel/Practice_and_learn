/**
 * @vitest-environment jsdom
 */

import { beforeEach, describe, expect, test } from 'vitest';
import { Rover } from './method2';

test('should set correct initial starting point [0, 0]', () => {
    const rover = new Rover(0,0,'N');
    expect(rover.position()).to.toEqual([0,0]);
})

test('should starting point [0, 0] to direction "N" returns [0,1]', () => {
    const rover = new Rover(0,0,'N');
    rover.forward();
    expect(rover.position()).to.toEqual([0,1]);
})

test('should starting point [0, 0] to direction "E" returns [1,0]', () => {
    const rover = new Rover(0,0,'E');
    rover.forward();
    expect(rover.position()).to.toEqual([1,0]);
})

test('should stasssssrting point [0, 0] to direction "W" returns [-1,0]', () => {
    const rover = new Rover(0,0,'W');
    rover.forward();
    expect(rover.position()).to.toEqual([-1,0]);
})
