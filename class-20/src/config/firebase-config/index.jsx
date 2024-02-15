// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnQKHT1CAIdR8rHNvi9JWF2st3du0WUMU",
  authDomain: "test-project-2024-13d94.firebaseapp.com",
  projectId: "test-project-2024-13d94",
  storageBucket: "test-project-2024-13d94.appspot.com",
  messagingSenderId: "1098036168388",
  appId: "1:1098036168388:web:96e8b8dfaf66067abeab91"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export {firebase_app, auth}