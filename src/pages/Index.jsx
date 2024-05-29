import { useState } from "react";
import { Container, Text, VStack, Button, HStack, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementBy5 = () => setCount(count + 5);
  const decrementBy5 = () => setCount(count - 5);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Counter App</Text>
        <Text fontSize="2xl">{count}</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="100%" justifyItems="center">
          <Button colorScheme="teal" onClick={increment}>Increment</Button>
          <Button colorScheme="red" onClick={decrement}>Decrement</Button>
          <Button colorScheme="gray" onClick={reset}>Reset</Button>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;