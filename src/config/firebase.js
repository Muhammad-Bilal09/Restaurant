// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ1MxFWaZptmXU5uI7mjegnCfBHWwCvwA",
  authDomain: "restaurant-5e775.firebaseapp.com",
  projectId: "restaurant-5e775",
  storageBucket: "restaurant-5e775.appspot.com",
  messagingSenderId: "347909458543",
  appId: "1:347909458543:web:4ed189d63c5c0b8ddddb9a",
  measurementId: "G-JHDER2XGHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth,analytics}