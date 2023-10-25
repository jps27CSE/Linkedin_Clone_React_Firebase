import { toast } from "react-toastify";
import { firestore } from "../Firebase/FirebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

let dbRef = collection(firestore, "posts"); //creating 'post' database

export const postStatus = (object) => {
  addDoc(dbRef, object)
    .then((res) => {
      toast.success("Document added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
