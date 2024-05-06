import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="brand.700" color="white" minHeight="100vh">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={4}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>BandName</Heading>
        <Button display={{ base: "block", md: "none" }} variant="outline" leftIcon={<FaBars />}>
          Menu
        </Button>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost" ml={4}>Tour Dates</Button>
          <Button variant="ghost" ml={4}>Merch</Button>
          <Button variant="ghost" ml={4}>About</Button>
        </Flex>
      </Flex>
      <Flex align="center" justify="center" height="calc(100vh - 64px)">
        <Box textAlign="center" p={4}>
          <Heading as="h2" size="2xl" fontWeight="bold" mb={6}>
            Catch Us Live on Tour!
          </Heading>
          <Text fontSize="xl" mb={6}>
            Join us for a night of unforgettable music and vibrant performances.
          </Text>
          <Button size="lg" colorScheme="red" mt={4}>
            View Tour Dates
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;