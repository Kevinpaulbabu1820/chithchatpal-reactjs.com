// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA06dS7ggcGlBKd7WmV_U3RaPUY88H3FOc",
  authDomain: "chat-app-fbcd2.firebaseapp.com",
  projectId: "chat-app-fbcd2",
  storageBucket: "chat-app-fbcd2.appspot.com",
  messagingSenderId: "868108484236",
  appId: "1:868108484236:web:01bd391c01ecc1efcb45a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);