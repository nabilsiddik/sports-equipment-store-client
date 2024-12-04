import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM1CBpnlS_i_1PaSRWbrlak8HUj2Xdv8U",
  authDomain: "user-authentication-30262.firebaseapp.com",
  projectId: "user-authentication-30262",
  storageBucket: "user-authentication-30262.firebasestorage.app",
  messagingSenderId: "69906383939",
  appId: "1:69906383939:web:6d75003619a2cab15dc0f6",
  measurementId: "G-LVYWLGV2RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

