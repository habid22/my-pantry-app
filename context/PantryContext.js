// context/PantryContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, deleteDoc, updateDoc, onSnapshot } from 'firebase/firestore';

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
    await addDoc(collection(db, 'pantry'), item);
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'pantry', id));
  };

  const updateItem = async (id, updatedItem) => {
    await updateDoc(doc(db, 'pantry', id), updatedItem);
  };

  return (
    <PantryContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
      {children}
    </PantryContext.Provider>
  );
};
