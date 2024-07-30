// firebaseConfig.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Optionally import analytics if you're using it
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD8tCDyOEqVFM5Y9r9wuYZqMWeVBFs4mH8",
  authDomain: "pantry-tracker-3386c.firebaseapp.com",
  projectId: "pantry-tracker-3386c",
  storageBucket: "pantry-tracker-3386c.appspot.com",
  messagingSenderId: "806576915022",
  appId: "1:806576915022:web:8f1a519a06a303e065791f",
  measurementId: "G-6Z3KW5L8FN"
};

// Check if the Firebase app is already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  // Initialize analytics if needed
  // if (typeof window !== 'undefined') {
  //   getAnalytics(app);
  // }
} else {
  app = getApp(); // Use the existing app instance
}

const db = getFirestore(app);

export { db };
