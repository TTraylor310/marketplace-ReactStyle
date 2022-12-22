// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmKNGxB0Bw6fl4tlkGHYNnzaJ_LFOUrxI",
  authDomain: "house-marketplace-ttraylor310.firebaseapp.com",
  projectId: "house-marketplace-ttraylor310",
  storageBucket: "house-marketplace-ttraylor310.appspot.com",
  messagingSenderId: "850933256516",
  appId: "1:850933256516:web:0e4a3f3f66c06070598711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()