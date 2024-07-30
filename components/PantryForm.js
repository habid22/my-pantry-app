// components/PantryForm.js
import { useState } from 'react';
import { usePantry } from '../context/PantryContext';
import { Box, Button, Input, VStack } from "@chakra-ui/react";

const PantryForm = () => {
  const [name, setName] = useState('');
  const { addItem } = usePantry();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return; // Prevent adding empty items
    addItem({ name });
    setName('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <VStack spacing={4}>
        <Input
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" colorScheme="teal">Add Item</Button>
      </VStack>
    </Box>
  );
};

export default PantryForm;
