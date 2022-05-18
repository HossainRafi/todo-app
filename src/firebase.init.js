// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Uirn-PhgzXQ_S8pprIpiivatGW77duE",
  authDomain: "todo-app-4ffe8.firebaseapp.com",
  projectId: "todo-app-4ffe8",
  storageBucket: "todo-app-4ffe8.appspot.com",
  messagingSenderId: "136660710696",
  appId: "1:136660710696:web:b1e80eab64430c89fe4c1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
