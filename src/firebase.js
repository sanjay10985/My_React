// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq3SONUi_I_WLobaFWFKU7SySEuxoV7qI",
  authDomain: "react-web-728b3.firebaseapp.com",
  projectId: "react-web-728b3",
  storageBucket: "react-web-728b3.appspot.com",
  messagingSenderId: "20303417745",
  appId: "1:20303417745:web:77350545768a4877834a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);