import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnFyTb2MLhEUE6-_1vHMJLuPINkH-OO8Q",
  authDomain: "auth-probox.firebaseapp.com",
  projectId: "auth-probox",
  storageBucket: "auth-probox.appspot.com",
  messagingSenderId: "106232831843",
  appId: "1:106232831843:web:ed2145a6dd41e05022fd56",
  measurementId: "G-XL79GX5RGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Enable persistence
setPersistence(auth, browserLocalPersistence);


export { auth, provider};