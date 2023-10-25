// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeDXWFZ_0La7titEgYZpJPkbjDmemGbKg",
  authDomain: "linkedin-clone-react-fir-34355.firebaseapp.com",
  projectId: "linkedin-clone-react-fir-34355",
  storageBucket: "linkedin-clone-react-fir-34355.appspot.com",
  messagingSenderId: "455878140849",
  appId: "1:455878140849:web:13e3443ac15bf86e8e5390",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { app, auth, firestore };
