// context/PantryContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore';

const PantryContext = createContext();

export const usePantry = () => useContext(PantryContext);

export const PantryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'pantry'), (snapshot) => {
      setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

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
    <PantryContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
      {children}
    </PantryContext.Provider>
  );
};
