import { useState } from "react";
import { Container, Text, VStack, Button, HStack, SimpleGrid, Input } from "@chakra-ui/react";

const Index = () => {
  const [count, setCount] = useState(0);

  const [step, setStep] = useState(1);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Counter App</Text>
        <Text fontSize="2xl">{count}</Text>
        <Input 
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))} 
          placeholder="Set step value" 
          width="100px" 
          textAlign="center"
        />
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