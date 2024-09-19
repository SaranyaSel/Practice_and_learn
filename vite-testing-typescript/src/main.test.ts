/**
 * @vitest-environment jsdom
 */

import { beforeEach, describe, expect, test } from 'vitest';
import { rover } from './main';

test('should set correct initial starting point [0, 0]', () => {
  expect(rover({ x: 0, y: 0, d: 'N', commands: [] })).toEqual({ x: 0, y: 0, d: 'N' });
})
test('rotates right', () => {
  expect(rover({ x: 0, y: 0, d: 'N', commands: ["r"] })).toEqual({ x: 0, y: 0, d: 'E' });
  expect(rover({ x: 0, y: 0, d: 'E', commands: ["r"] })).toEqual({ x: 0, y: 0, d: 'S' });
  expect(rover({ x: 0, y: 0, d: 'S', commands: ["r"] })).toEqual({ x: 0, y: 0, d: 'W' });
  expect(rover({ x: 0, y: 0, d: 'W', commands: ["r"] })).toEqual({ x: 0, y: 0, d: 'N' });
})

test('rotates left', () => {
  expect(rover({ x: 0, y: 0, d: 'N', commands: ["l"] })).toEqual({ x: 0, y: 0, d: 'W' });
  expect(rover({ x: 0, y: 0, d: 'W', commands: ["l"] })).toEqual({ x: 0, y: 0, d: 'S' });
  expect(rover({ x: 0, y: 0, d: 'S', commands: ["l"] })).toEqual({ x: 0, y: 0, d: 'E' });
  expect(rover({ x: 0, y: 0, d: 'E', commands: ["l"] })).toEqual({ x: 0, y: 0, d: 'N' });
})

test('From all direction forward move', () => {
  expect(rover({ x: 0, y: 0, d: 'N', commands: ["f"] })).toEqual({ x: 0, y: 1, d: 'N' });
  expect(rover({ x: 0, y: 0, d: 'E', commands: ["f"] })).toEqual({ x: 1, y: 0, d: 'E' });
  expect(rover({ x: 0, y: 0, d: 'S', commands: ["f"] })).toEqual({ x: 0, y: -1, d: 'S' });
  expect(rover({ x: 0, y: 0, d: 'W', commands: ["f"] })).toEqual({ x: -1, y: 0, d: 'W' });
})

test('From all direction backward move', () => {
  expect(rover({ x: 0, y: 0, d: 'N', commands: ["b"] })).toEqual({ x: 0, y: -1, d: 'N' });
  expect(rover({ x: 0, y: 0, d: 'E', commands: ["b"] })).toEqual({ x: -1, y: 0, d: 'E' });
  expect(rover({ x: 0, y: 0, d: 'S', commands: ["b"] })).toEqual({ x: 0, y: 1, d: 'S' });
  expect(rover({ x: 0, y: 0, d: 'W', commands: ["b"] })).toEqual({ x: 1, y: 0, d: 'W' });
})
