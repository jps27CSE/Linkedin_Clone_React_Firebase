import { toast } from "react-toastify";
import { firestore } from "../Firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

let dbRef = collection(firestore, "posts"); //creating 'post' database

export const postStatus = (status) => {
  let object = {
    status: status,
  };
  addDoc(dbRef, object)
    .then((res) => {
      toast.success("Document added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
