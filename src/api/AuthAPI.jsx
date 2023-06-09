import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
export const LoginAPI = (email, password) => {
  try {
    let respone = signInWithEmailAndPassword(auth, email, password);
    return respone;
  } catch (error) {
    return error;
  }
};

export const RegisterAPI = (email, password) => {
  try {
    let respone = createUserWithEmailAndPassword(auth, email, password);
    return respone;
  } catch (error) {
    return error;
  }
};
