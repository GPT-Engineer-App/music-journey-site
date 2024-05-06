import { Box, Flex, Heading, Text, Button, Image, Container } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" color="white" py={4}>
        <Flex alignItems="center" justifyContent="space-between" px={8}>
          <Heading as="h1" size="lg">BandName Tours</Heading>
          <FaBars size="24px" />
        </Flex>
      </Box>
      <Flex direction="column" align="center" justify="center" bg="gray.800" color="white" minHeight="calc(100vh - 64px)">
        <Image src="https://via.placeholder.com/600x400" alt="Band Image" mb={8} />
        <Heading as="h2" size="xl" mb={4}>Catch Us Live!</Heading>
        <Text fontSize="xl" mb={8}>Join us on our world tour and experience the magic live.</Text>
        <Button colorScheme="blue" size="lg">View Tour Dates</Button>
      </Flex>
    </Container>
  );
};

export default Index;