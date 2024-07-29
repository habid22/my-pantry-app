// components/PantryItem.js
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';

const PantryItem = ({ item }) => {
  const { deleteItem, updateItem } = usePantry();

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h3" size="lg">{item.name}</Heading>
      <Text mt={4}>
        <Button colorScheme="red" onClick={() => deleteItem(item.id)}>Delete</Button>
        <Button ml={2} onClick={() => updateItem(item.id, { name: 'Updated Name' })}>Edit</Button>
      </Text>
    </Box>
  );
};

export default PantryItem;
