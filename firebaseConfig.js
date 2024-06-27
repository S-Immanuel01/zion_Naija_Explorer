// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyD4oO-RliSAfIDSwhp6YbYhnySvJSicqXM",
  authDomain: "naija-explorer.firebaseapp.com",
  projectId: "naija-explorer",
  storageBucket: "naija-explorer.appspot.com",
  messagingSenderId: "978304133065",
  appId: "1:978304133065:web:8fd24adc0c618c74466a18",
  measurementId: "G-T9WT963GY8"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export {auth}