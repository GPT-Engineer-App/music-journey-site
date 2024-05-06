import { Container, Text, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5} centerContent>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading mb={4}>Band Tour Dates</Heading>
          <Text fontSize="xl">Check out our latest tour dates and book your tickets now!</Text>
          <Button rightIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" mt={4}>
            Book Tickets
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading mb={4}>About the Band</Heading>
          <Text fontSize="xl">Learn more about the band's history, members, and music style.</Text>
          <Button rightIcon={<FaMusic />} colorScheme="teal" variant="solid" mt={4}>
            Learn More
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;