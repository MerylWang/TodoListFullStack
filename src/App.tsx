import { Button, Theme, Text, Flex } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Theme accentColor="lime">
        <Flex
          direction="column"
          gap="2"
          width="max-content"
          style={{ margin: 'auto' }}
        >
          <Text>Hello world</Text>
          <Button onClick={() => setCount((c: number) => c + 1)}>
            Count {count}
          </Button>
        </Flex>
      </Theme>
    </>
  );
}

export default App;
