import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtl_9_flWOaPoxKwNX8ZjsBCP6KLkhaDA",
  authDomain: "pro-box-fac33.firebaseapp.com",
  projectId: "pro-box-fac33",
  storageBucket: "pro-box-fac33.appspot.com",
  messagingSenderId: "585652928316",
  appId: "1:585652928316:web:8c5093456fc853a5d6e839",
  measurementId: "G-11F0H13WVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Enable persistence
setPersistence(auth, browserLocalPersistence);

export { auth, provider };
