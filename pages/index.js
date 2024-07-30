// pages/index.js
import MyNavbar from '../components/Navbar';
import PantryList from '../components/PantryList';
import AddItemModal from '../components/AddItemModal';
import { PantryProvider } from '../context/PantryContext';
import { Box, Container, Heading, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <PantryProvider>
      <MyNavbar />
      <Container maxW="container.md" mt={5}>
        <Flex direction="column" align="center" mb={4}>
          <Heading mb={4} textAlign="center">
            Pantry Management
          </Heading>
          <AddItemModal />
        </Flex>
        <PantryList />
      </Container>
    </PantryProvider>
  );
};

export default Home;
