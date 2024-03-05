import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// import {
//     getDatabase,
//     set,
//     update,
// } from "firebase/database";
// import {
//     getFirestore,
//     collection,
//     getDoc,
//     addDoc,
//     setDoc,
//     doc,
//     query,
//     where,
// } from "firebase/firestore";
// import {
//     getAuth,
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     sendPasswordResetEmail,
//     createUserWithEmailAndPassword,
// } from "firebase/auth";
// import {
//     getStorage,
//     ref,
//     getDownloadURL,
//     uploadBytesResumable,
// } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIRMyABHPDd6D5AEDYA7URkmCp1oWl23U",
    authDomain: "covenant-attendance-system.firebaseapp.com",
    // databaseURL: "https://covenant-attendance-system-default-rtdb.firebaseio.com",
    projectId: "covenant-attendance-system",
    storageBucket: "covenant-attendance-system.appspot.com",
    messagingSenderId: "548597580643",
    appId: "1:548597580643:web:73d70a20991234cc338956",
    measurementId: "G-MDZF12Q9XB",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };