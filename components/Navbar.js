// components/Navbar.js
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

const MyNavbar = () => {
  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Heading as="h1" size="md" color="white">
          Pantry Manager
        </Heading>
        <Flex alignItems={"center"}>
          <Link href="/" p={2} color="white">
            Home
          </Link>
          <Link href="/about" p={2} color="white">
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MyNavbar;
