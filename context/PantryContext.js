// context/PantryContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore';

const PantryContext = createContext();

export const usePantry = () => useContext(PantryContext);

export const PantryProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'pantry'), (snapshot) => {
      const allItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(allItems);
      filterItems(allItems, searchQuery);
    });
    return unsub;
  }, [searchQuery]);

  const filterItems = (items, query) => {
    if (!query) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const addItem = async (item) => {
    try {
      await addDoc(collection(db, 'pantry'), item);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await deleteDoc(doc(db, 'pantry', id));
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      await updateDoc(doc(db, 'pantry', id), updatedItem);
    } catch (error) {
      console.error("Error updating item: ", error);
    }
  };

  return (
    <PantryContext.Provider value={{ items, filteredItems, addItem, deleteItem, updateItem, setSearchQuery }}>
      {children}
    </PantryContext.Provider>
  );
};
