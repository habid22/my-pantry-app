// components/EditItemModal.js
import React, { useState } from 'react';
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
  useDisclosure
} from "@chakra-ui/react";
import { usePantry } from '../context/PantryContext';

const EditItemModal = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, setNewName] = useState(item.name);
  const { updateItem } = usePantry();

  const handleSave = () => {
    if (newName.trim() !== '') {
      updateItem(item.id, { name: newName.trim() });
      onClose();
    }
  };

  return (
    <>
      <Button onClick={onOpen} size="sm" ml={2}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Item Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input 
              placeholder="Enter new name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditItemModal;
