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
