
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCbpJYDXMS_QOw3ovby_fz1kGrnrnfjo7E",
  authDomain: "iviatu-50038.firebaseapp.com",
  projectId: "iviatu-50038",
  storageBucket: "iviatu-50038.firebasestorage.app",
  messagingSenderId: "533888721275",
  appId: "1:533888721275:web:6eace05cede0be761dddde"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };