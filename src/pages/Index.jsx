import { Box, Flex, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.800" color="white" minHeight="100vh">
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading as="h1" size="2xl" mb={4}>Live Tours</Heading>
        <Text fontSize="xl" mb={6}>Experience the magic of live music!</Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" size="lg">
          Buy Tickets
        </Button>
      </Flex>
      <VStack spacing={8} mt={10}>
        <Flex direction="column" align="center" justify="center">
          <FaMusic size="3em" />
          <Text fontSize="lg">Upcoming Tours</Text>
        </Flex>
        <Image src="https://via.placeholder.com/600x400" alt="Band Image" />
      </VStack>
    </Box>
  );
};

export default Index;