// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKQtyEu-ZYUHsmaTJriPQUAkapewyAaHU",
  authDomain: "linkedinclone-de8c9.firebaseapp.com",
  projectId: "linkedinclone-de8c9",
  storageBucket: "linkedinclone-de8c9.appspot.com",
  messagingSenderId: "971232020924",
  appId: "1:971232020924:web:563f571ee97d8316eb83b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
