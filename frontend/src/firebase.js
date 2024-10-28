// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKZcnqVrIrpPsl5B1gP2gdVJXmREzTVk4",
  authDomain: "gen-ai-e4268.firebaseapp.com",
  projectId: "gen-ai-e4268",
  storageBucket: "gen-ai-e4268.appspot.com",
  messagingSenderId: "798284188548",
  appId: "1:798284188548:web:0749ef221bf2fc249dabd1",
  measurementId: "G-77KVHQ2J0B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);