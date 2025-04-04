// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp2k8b6vAyiHWam0FjQVecKt_GWlenJOo",
  authDomain: "twoplayerquiz-69bf7.firebaseapp.com",
  projectId: "twoplayerquiz-69bf7",
  storageBucket: "twoplayerquiz-69bf7.firebasestorage.app",
  messagingSenderId: "307027950824",
  appId: "1:307027950824:web:11072f4a40f05729209d5d",
  measurementId: "G-929S368PP7",
  databaseUrl: "https://twoplayerquiz-69bf7-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
