// components/AddItemModal.js
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { usePantry } from '../context/PantryContext';

const AddItemModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const { addItem } = usePantry();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return; // Prevent adding empty items
    addItem({ name });
    setName('');
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Add More Items
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack as="form" spacing={4} onSubmit={handleSubmit}>
              <Input
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button type="submit" colorScheme="teal" width="full">
                Add Item
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddItemModal;
