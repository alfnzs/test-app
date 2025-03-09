import {initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApN96jGEefOBrSVSfjWV7poBFZI7QO7po",
    authDomain: "sample-project-7cbbb.firebaseapp.com",
    projectId: "sample-project-7cbbb",
    storageBucket: "sample-project-7cbbb.firebasestorage.app",
    messagingSenderId: "944837490391",
    appId: "1:944837490391:web:e628962a4cef60cd68a292"
};

export const app=initializeApp(firebaseConfig);
const db = getFirestore(app);  // Get Firestore instance
export { db };