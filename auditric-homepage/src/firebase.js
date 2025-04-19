import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVljzCh0ynKXBphP--l3hTuBkNWFmRUhE",
  authDomain: "auditric-backend-20460.firebaseapp.com",
  projectId: "auditric-backend-20460",
  storageBucket: "auditric-backend-20460.firebasestorage.app",
  messagingSenderId: "71834277735",
  appId: "1:71834277735:web:93156b5dc8ce35f62601c2",
  measurementId: "G-YPLXXRWSVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase Authentication
export const auth = getAuth(app);

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const token = await userCredential.user.getIdToken();

  const res = await fetch("https://auditric-backend-20460.onrender.com/api/v1/auth/login", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();
  return data;
};
