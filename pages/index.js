// pages/index.js
import MyNavbar from '../components/Navbar';
import PantryList from '../components/PantryList';
import AddItemModal from '../components/AddItemModal';
import SearchBar from '../components/SearchBar';
import SortingDropdown from '../components/SortingDropdown';
import RecipeModal from '../components/RecipeModal';
import { PantryProvider } from '../context/PantryContext';
import { Box, Container, Heading, Flex, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PantryProvider>
      <MyNavbar />
      <Container maxW="container.md" mt={5}>
        <Heading mb={4} textAlign="center">
          Your Current Pantry 🥫🚪
        </Heading>
        <Flex mb={4} align="center">
          <SearchBar />
          <Box ml={2}>
            <SortingDropdown />
          </Box>
        </Flex>
        <Box display="flex" justifyContent="center" mb={4}>
          <AddItemModal />
          <Button colorScheme="blue" ml={4} onClick={onOpen}>Generate Recipe</Button>
        </Box>
        <PantryList />
      </Container>
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </PantryProvider>
  );
};

export default Home;
