import ExampleClass from '../ExampleClass';
import { beforeEach, describe, expect, it } from 'vitest';

describe('ExampleClass', () => {
  let exampleClass: ExampleClass;

  beforeEach(() => {
    exampleClass = new ExampleClass();
  });

  it('should initialize count to 0', () => {
    expect(exampleClass.count).toBe(0);
  });

  it('should increment count by 1', () => {
    exampleClass.incr();
    expect(exampleClass.count).toBe(1);
  });

  it('should increment count by the given value', () => {
    exampleClass.incr(5);
    expect(exampleClass.count).toBe(5);
  });

  it('should return the current count', () => {
    const count = exampleClass.get();
    expect(count).toBe(exampleClass.count);
  });
});
