// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAldv6ktqGwq82vdUkdHZ2dNR1nSL0GM68",
  authDomain: "netflix-clone-b51ef.firebaseapp.com",
  projectId: "netflix-clone-b51ef",
  storageBucket: "netflix-clone-b51ef.appspot.com",
  messagingSenderId: "627614094609",
  appId: "1:627614094609:web:390d44bfe3fef7bc4ca8b0",
  measurementId: "G-PHBTC4N305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);