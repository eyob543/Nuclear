// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGW3Y-rDsd9ijXbyCLRyDWJxA8SRjHeN4",
  authDomain: "nuclear-hackaton.firebaseapp.com",
  databaseURL: "https://nuclear-hackaton-default-rtdb.firebaseio.com/",
  projectId: "nuclear-hackaton",
  storageBucket: "nuclear-hackaton.appspot.com",
  messagingSenderId: "422617504107",
  appId: "1:422617504107:web:b3ac977d9ad7135902942e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
