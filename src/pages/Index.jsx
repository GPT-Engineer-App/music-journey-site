import { Box, Flex, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaMusic } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="brand.700" color="white" minHeight="100vh" p={4}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Heading as="h1" size="2xl" mb={2}>
          <FaMusic /> The Band Tour
        </Heading>
        <Text fontSize="xl" mb={4}>
          Catch us live on tour!
        </Text>
        <Button colorScheme="blue" size={isMobile ? "md" : "lg"}>
          Tour Dates
        </Button>
        <Flex mt={10} width="100%" justify="space-evenly">
          <Button colorScheme="green">About Us</Button>
          <Button colorScheme="red">Gallery</Button>
          <Button colorScheme="purple">Contact</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;