// context/PantryContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, query, where, getDocs, getDoc, updateDoc, addDoc, deleteDoc, doc } from 'firebase/firestore';

const PantryContext = createContext();

export const usePantry = () => useContext(PantryContext);

export const PantryProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMethod, setSortMethod] = useState('name-asc');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'pantry'), (snapshot) => {
      const allItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(allItems);
    });
    return unsub;
  }, []);

  useEffect(() => {
    filterAndSortItems();
  }, [items, searchQuery, sortMethod]);

  const filterAndSortItems = () => {
    let filtered = [...items];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort items based on the selected method
    switch (sortMethod) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'quantity-asc':
        filtered.sort((a, b) => a.quantity - b.quantity);
        break;
      case 'quantity-desc':
        filtered.sort((a, b) => b.quantity - a.quantity);
        break;
      default:
        break;
    }

    setFilteredItems(filtered);
  };

  const addItem = async (newItem) => {
    try {
      const itemQuery = query(collection(db, 'pantry'), where("name", "==", newItem.name));
      const snapshot = await getDocs(itemQuery);
      if (!snapshot.empty) {
        // Item exists, update the quantity
        const existingItem = snapshot.docs[0];
        const newQuantity = existingItem.data().quantity + 1;
        await updateDoc(doc(db, 'pantry', existingItem.id), { quantity: newQuantity });
      } else {
        // Item doesn't exist, add new item with quantity 1
        await addDoc(collection(db, 'pantry'), { ...newItem, quantity: 1 });
      }
    } catch (error) {
      console.error("Error adding/updating item: ", error);
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

  const incrementItemQuantity = async (id) => {
    try {
      const itemRef = doc(db, 'pantry', id);
      const itemSnapshot = await getDoc(itemRef);
      if (itemSnapshot.exists()) {
        const currentQuantity = itemSnapshot.data().quantity || 0;
        await updateDoc(itemRef, { quantity: currentQuantity + 1 });
      }
    } catch (error) {
      console.error("Error incrementing quantity: ", error);
    }
  };

  const decrementItemQuantity = async (id) => {
    try {
      const itemRef = doc(db, 'pantry', id);
      const itemSnapshot = await getDoc(itemRef);
      if (itemSnapshot.exists()) {
        const currentQuantity = itemSnapshot.data().quantity || 0;
        if (currentQuantity > 0) {
          await updateDoc(itemRef, { quantity: currentQuantity - 1 });
        }
      }
    } catch (error) {
      console.error("Error decrementing quantity: ", error);
    }
  };

  return (
    <PantryContext.Provider value={{
      items,
      filteredItems,
      addItem,
      deleteItem,
      updateItem,
      incrementItemQuantity,
      decrementItemQuantity,
      setSearchQuery,
      setSortMethod
    }}>
      {children}
    </PantryContext.Provider>
  );
};
