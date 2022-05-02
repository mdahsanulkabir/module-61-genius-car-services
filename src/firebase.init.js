// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr-3Hf9YpCW7Pp24DgQnWr-rsJ8imtwYM",
  authDomain: "module60-genius-car-services.firebaseapp.com",
  projectId: "module60-genius-car-services",
  storageBucket: "module60-genius-car-services.appspot.com",
  messagingSenderId: "916937693539",
  appId: "1:916937693539:web:40869e02389a1454a7db56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;