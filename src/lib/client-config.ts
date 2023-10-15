import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBYa0se0PDPKt6kTlGdgie-cgF9oU_43fM",
  authDomain: "the-final-asoul.firebaseapp.com",
  projectId: "the-final-asoul",
  storageBucket: "the-final-asoul.appspot.com",
  messagingSenderId: "935273362776",
  appId: "1:935273362776:web:5be2d091ab658a2bffa12d",
  measurementId: "G-P45MQHKTGV"
};

let app = initializeApp(firebaseConfig);
export let auth = getAuth(app)


