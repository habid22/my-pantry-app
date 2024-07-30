// components/PantryItem.js
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';

const PantryItem = ({ item }) => {
  const { deleteItem, updateItem } = usePantry();

  const handleDelete = () => {
    deleteItem(item.id);
  };

  const handleUpdate = () => {
    const updatedName = prompt("Enter new name", item.name);
    if (updatedName && updatedName.trim() !== '') {
      updateItem(item.id, { name: updatedName });
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading as="h3" size="lg">{item.name}</Heading>
      <Text mt={4}>
        <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
        <Button ml={2} onClick={handleUpdate}>Edit</Button>
      </Text>
    </Box>
  );
};

export default PantryItem;
