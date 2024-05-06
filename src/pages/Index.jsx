import { Box, Flex, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="brand.900" color="white" minHeight="100vh">
      <Flex as="nav" justifyContent="space-between" padding="1rem" borderBottom="1px solid white">
        <FaMusic size="2rem" />
        <Flex gap="2rem">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Tour Dates</Button>
          <Button variant="ghost">Merch</Button>
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="center" height="calc(100vh - 64px)">
        <Heading as="h1" size="4xl" fontWeight="bold" mb="2rem">The Rockers</Heading>
        <Text fontSize="xl" mb="2rem">Join us on our world tour!</Text>
        <Button size="lg" colorScheme="blue">Get Tickets</Button>
      </Flex>
    </Box>
  );
};

export default Index;