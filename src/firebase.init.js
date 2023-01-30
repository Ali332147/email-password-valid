// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhoPzgyk3DvYCEdZqb7rLT_AaSUv0F5lk",
  authDomain: "email-password-valid.firebaseapp.com",
  projectId: "email-password-valid",
  storageBucket: "email-password-valid.appspot.com",
  messagingSenderId: "812414956802",
  appId: "1:812414956802:web:bf879207c51edd7137fe1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;