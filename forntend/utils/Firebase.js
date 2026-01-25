import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-e3865.firebaseapp.com",
  projectId: "loginonecart-e3865",
  storageBucket: "loginonecart-e3865.firebasestorage.app",
  messagingSenderId: "720314200753",
  appId: "1:720314200753:web:7247cce709a7107802e890",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
