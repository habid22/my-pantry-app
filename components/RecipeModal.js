// components/RecipeModal.js
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Stack,
  Box,
  Text
} from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';
import { fetchRecipeFromGemini } from '../utils/fetchRecipe';

const RecipeModal = ({ isOpen, onClose }) => {
  const { items } = usePantry();
  const [selectedItems, setSelectedItems] = useState([]);
  const [recipe, setRecipe] = useState('');

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => 
      prevSelectedItems.includes(item) 
      ? prevSelectedItems.filter(i => i !== item) 
      : [...prevSelectedItems, item]
    );
  };

  const handleGenerateRecipe = async () => {
    const recipeText = await fetchRecipeFromGemini(selectedItems);
    setRecipe(recipeText);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Ingredients</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={3}>
            {items.map((item) => (
              <Checkbox 
                key={item.id} 
                onChange={() => handleCheckboxChange(item.name)}
              >
                {item.name}
              </Checkbox>
            ))}
          </Stack>
          {recipe && (
            <Box mt={4}>
              <Text fontWeight="bold">Generated Recipe:</Text>
              <Text whiteSpace="pre-wrap">{recipe}</Text>
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleGenerateRecipe}>
            Generate Recipe
          </Button>
          <Button variant="ghost" onClick={onClose} ml={3}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
