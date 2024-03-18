import ExampleClass from './ExampleClass';

async function runScript() {
  const counter = new ExampleClass();
  counter.incr(5);
  console.log(counter.get());
}

runScript();
