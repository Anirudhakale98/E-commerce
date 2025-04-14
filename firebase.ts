import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwl-VDaEtl80OTCCuAb9QrO94Ct6EdqJo",
  authDomain: "ecommerce-c5caf.firebaseapp.com",
  projectId: "ecommerce-c5caf",
  storageBucket: "ecommerce-c5caf.firebasestorage.app",
  messagingSenderId: "449590188724",
  appId: "1:449590188724:web:300b575306e0cd3668d5e1",
  measurementId: "G-NXWMFWWJ5G"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
