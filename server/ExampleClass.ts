class ExampleClass {
  count: number = 0;

  constructor(count: number = 0) {
    this.count = count;
  }

  incr(x: number = 1): number {
    this.count += x;
    return this.count;
  }

  get(): number {
    return this.count;
  }
}

export default ExampleClass;
