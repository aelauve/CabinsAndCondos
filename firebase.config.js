// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMQv24WisTJKP4Clc3UXCDTTmuuCREP0Q",
  authDomain: "cabinsandcondos-b77d1.firebaseapp.com",
  projectId: "cabinsandcondos-b77d1",
  storageBucket: "cabinsandcondos-b77d1.appspot.com",
  messagingSenderId: "287719517012",
  appId: "1:287719517012:web:215980a7ebe669482b76c1",
  measurementId: "G-8XCTYZSD8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);