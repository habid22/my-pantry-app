// pages/index.js
import MyNavbar from '../components/Navbar';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';
import { PantryProvider } from '../context/PantryContext';
import { Box, Container, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <PantryProvider>
      <MyNavbar />
      <Container maxW="container.md" mt={5}>
        <Heading mb={4}>Pantry Management</Heading>
        <PantryForm />
        <PantryList />
      </Container>
    </PantryProvider>
  );
};

export default Home;
