// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCa9YyYC_y0stG2zx6KkCXDrb93RtjMTE",
    authDomain: "twitter-clone-afd46.firebaseapp.com",
    projectId: "twitter-clone-afd46",
    storageBucket: "twitter-clone-afd46.appspot.com",
    messagingSenderId: "356019152388",
    appId: "1:356019152388:web:47fa46d0fa899f428af751"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };


