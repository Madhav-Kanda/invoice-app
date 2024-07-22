import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC3zrlR50m9AqFecDiyUlVi41Zui8xppOw",
  authDomain: "invoice-app-f5099.firebaseapp.com",
  projectId: "invoice-app-f5099",
  storageBucket: "invoice-app-f5099.appspot.com",
  messagingSenderId: "194566035746",
  appId: "1:194566035746:web:1084f1e5447ab7bb512d7b",
  measurementId: "G-B2MNXV2BNJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
