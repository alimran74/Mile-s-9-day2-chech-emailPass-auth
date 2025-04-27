// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import Root from "./layout/Root";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Do no share in public
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOuLS-z2f9ZwuKevgm2lP0Ww-7QSPfvfo",
  authDomain: "explore-email-pass-auth-40d02.firebaseapp.com",
  projectId: "explore-email-pass-auth-40d02",
  storageBucket: "explore-email-pass-auth-40d02.firebasestorage.app",
  messagingSenderId: "1049864398056",
  appId: "1:1049864398056:web:ce1360c09d6724ccca555d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);