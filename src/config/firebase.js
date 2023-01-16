import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA73j3qTZfl_SVRTpnps3yfsuAO7l4re2k",
  authDomain: "olxf-81990.firebaseapp.com",
  projectId: "olxf-81990",
  storageBucket: "olxf-81990.appspot.com",
  messagingSenderId: "637693614381",
  appId: "1:637693614381:web:2ba940a2aace52b3051ba4",
  measurementId: "G-CYLVY3ZKXZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db, storage }