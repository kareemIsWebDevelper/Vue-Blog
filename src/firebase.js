// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Gbrb6Sbn6Y0gBxg6EAy6fjD5HQGmaJI",
  authDomain: "nuxtblog-a61ab.firebaseapp.com",
  projectId: "nuxtblog-a61ab",
  storageBucket: "nuxtblog-a61ab.appspot.com",
  messagingSenderId: "357717034081",
  appId: "1:357717034081:web:10b95cf767a7bc2e375620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export  { db };