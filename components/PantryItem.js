// components/PantryItem.js
import { Box, Button, Heading, Text, IconButton, Flex } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { usePantry } from '../context/PantryContext';
import EditItemModal from './EditItemModal';

const PantryItem = ({ item }) => {
  const { deleteItem, incrementItemQuantity, decrementItemQuantity } = usePantry();

  const handleDelete = () => {
    deleteItem(item.id);
  };

  const handleIncrement = () => {
    incrementItemQuantity(item.id);
  };

  const handleDecrement = () => {
    decrementItemQuantity(item.id);
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="200px"
      maxW="300px"
    >
      <Box mb={4}>
        <Heading as="h3" size="md">{item.name}</Heading>
        <Text mt={2}>Quantity: {item.quantity}</Text>
      </Box>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <IconButton
            aria-label="Add item"
            icon={<AddIcon />}
            onClick={handleIncrement}
            colorScheme="green"
            size="sm"
            mr={2}
          />
          <IconButton
            aria-label="Remove item"
            icon={<MinusIcon />}
            onClick={handleDecrement}
            colorScheme="yellow"
            size="sm"
          />
        </Flex>
        <Button colorScheme="red" onClick={handleDelete} ml={2} size="sm">Delete</Button>
        <EditItemModal item={item} />
      </Flex>
    </Box>
  );
};

export default PantryItem;
