import {initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKOW-kAoFjtHVC978Vpyiwrc0XQQAvnMA",
    authDomain: "test-project-ed184.firebaseapp.com",
    projectId: "test-project-ed184",
    storageBucket: "test-project-ed184.firebasestorage.app",
    messagingSenderId: "876677035894",
    appId: "1:876677035894:web:9ed177a830a5c2621a6c57"
};

export const app=initializeApp(firebaseConfig);
const db = getFirestore(app);  // Get Firestore instance
export { db };