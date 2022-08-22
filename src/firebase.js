// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBxyKtUyJFWCmlYkRKUF3RbkJ7tz9PSEDM",
  authDomain: "linkedin-clone-95264.firebaseapp.com",
  projectId: "linkedin-clone-95264",
  storageBucket: "linkedin-clone-95264.appspot.com",
  messagingSenderId: "55656563770",
  appId: "1:55656563770:web:62f822582201372802e103",
  measurementId: "G-47PTE07VTR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };