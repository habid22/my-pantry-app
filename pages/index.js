// pages/index.js
import MyNavbar from '../components/Navbar';
import PantryList from '../components/PantryList';
import AddItemModal from '../components/AddItemModal';
import SearchBar from '../components/SearchBar';
import SortingDropdown from '../components/SortingDropdown';
import { PantryProvider } from '../context/PantryContext';
import { Box, Container, Heading, Flex, Spacer } from "@chakra-ui/react";

const Home = () => {
  return (
    <PantryProvider>
      <MyNavbar />
      <Container maxW="container.md" mt={5}>
        <Heading mb={4} textAlign="center">
          Pantry Management
        </Heading>
        <Flex mb={4} align="center">
          <SearchBar />
          <Box ml={2}>
            <SortingDropdown />
            ‎
          </Box>
        </Flex>
        <Box display="flex" justifyContent="center" mb={4}>
          <AddItemModal />
        </Box>
        <PantryList />
      </Container>
    </PantryProvider>
  );
};

export default Home;
