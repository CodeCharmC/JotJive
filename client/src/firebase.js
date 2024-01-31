// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jotjive.firebaseapp.com",
  projectId: "jotjive",
  storageBucket: "jotjive.appspot.com",
  messagingSenderId: "720031766428",
  appId: "1:720031766428:web:8986f4beab8f711dc4da59",
  measurementId: "G-CWWNTTN469"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);