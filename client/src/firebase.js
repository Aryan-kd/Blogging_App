import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogging-app-c3645.firebaseapp.com",
  projectId: "blogging-app-c3645",
  storageBucket: "blogging-app-c3645.appspot.com",
  messagingSenderId: "635621424290",
  appId: "1:635621424290:web:6a00fff7ce777b819e6bfb",
  measurementId: "G-Z10EE2J75C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
