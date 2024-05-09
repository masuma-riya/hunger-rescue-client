// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWlBwESNUgLLGsrij46si1yKUad5z70F4",
  authDomain: "hunger-rescue.firebaseapp.com",
  projectId: "hunger-rescue",
  storageBucket: "hunger-rescue.appspot.com",
  messagingSenderId: "668846298303",
  appId: "1:668846298303:web:fd6025f780a46d1ba7a20a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
