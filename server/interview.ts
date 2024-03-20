import ExampleClass from './ExampleClass';

async function main() {
  const counter = new ExampleClass();
  counter.incr(5);
  console.log(counter.get());
}

main();

export default main;
