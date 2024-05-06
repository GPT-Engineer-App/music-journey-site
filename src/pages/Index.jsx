import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaMusic, FaTicketAlt, FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box bg="brand.900" color="white" minHeight="100vh" py={10}>
      <Flex direction="column" align="center" justify="center" py={10}>
        <Heading as="h1" size="2xl" mb={6}>The Band Tour</Heading>
        <Text fontSize="xl" mb={6}>Join us on our latest tour across the globe!</Text>
        <Image src="https://via.placeholder.com/600x400" alt="Band Image" borderRadius="lg" mb={6} />
        <Flex gap={4}>
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" size={buttonSize}>
            Buy Tickets
          </Button>
          <Button leftIcon={<FaMusic />} colorScheme="purple" size={buttonSize}>
            Listen
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="orange" size={buttonSize}>
            Learn More
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;