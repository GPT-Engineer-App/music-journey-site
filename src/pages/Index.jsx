import { Box, Flex, Heading, Text, VStack, Link, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="brand.900" color="white" minHeight="100vh">
      <Flex as="nav" justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="lg">BandName Tours</Heading>
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          size="lg"
          variant="outline"
          display={['flex', 'flex', 'none']}
        />
        <Flex as="ul" display={['none', 'none', 'flex']} alignItems="center" listStyleType="none">
          <Link as="li" p={2} href="#tour-dates">Tour Dates</Link>
          <Link as="li" p={2} href="#about">About</Link>
          <Link as="li" p={2} href="#contact">Contact</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} mt={10} align="center" justify="center">
        <Heading as="h2" size="2xl">Catch Us Live!</Heading>
        <Text fontSize="xl">Don't miss out on our upcoming tours. Check out the dates and cities we'll be hitting next!</Text>
      </VStack>
    </Box>
  );
};

export default Index;