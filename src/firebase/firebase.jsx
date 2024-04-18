// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxNHGn8Hrz6jLKfoOmjuHHePrdJo5kEpw",
  authDomain: "gauth-d1a5d.firebaseapp.com",
  projectId: "gauth-d1a5d",
  storageBucket: "gauth-d1a5d.appspot.com",
  messagingSenderId: "8210499407",
  appId: "1:8210499407:web:c63ef671e910aae0e9673a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
}

