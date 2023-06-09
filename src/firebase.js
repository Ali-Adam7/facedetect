import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOwhdU8WFKoCGi8UGGmWVa8NPa3tva1Aw",
    authDomain: "facedetect-cd7b4.firebaseapp.com",
    projectId: "facedetect-cd7b4",
    storageBucket: "facedetect-cd7b4.appspot.com",
    messagingSenderId: "78088889240",
    appId: "1:78088889240:web:a7ea2eb724be51c92a81ed"
  };
  // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export  default app

