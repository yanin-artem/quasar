import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5HvE2x5c6CU7TX2vVctdXjTFf88ZA_sA",
  authDomain: "quasartodo-a8259.firebaseapp.com",
  projectId: "quasartodo-a8259",
  storageBucket: "quasartodo-a8259.appspot.com",
  messagingSenderId: "1028967584372",
  appId: "1:1028967584372:web:ee81e2cfa38446e2cab721"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
  db
}
