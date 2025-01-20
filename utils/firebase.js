// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9HqjThv-YaG4351C5wC-iP4bQ7OvVHfc",
  authDomain: "netflixgpt-d38e7.firebaseapp.com",
  projectId: "netflixgpt-d38e7",
  storageBucket: "netflixgpt-d38e7.firebasestorage.app",
  messagingSenderId: "63052430239",
  appId: "1:63052430239:web:229456e5098849b10cdbaa",
  measurementId: "G-E188826QB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);