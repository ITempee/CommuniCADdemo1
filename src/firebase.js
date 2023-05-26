import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDHPx4J0PJRQlyxE7EazM5_pR_SC7wkvGE",
    authDomain: "communicad-project.firebaseapp.com",
    databaseURL: "https://communicad-project-default-rtdb.firebaseio.com",
    projectId: "communicad-project",
    storageBucket: "communicad-project.appspot.com",
    messagingSenderId: "666118886743",
    appId: "1:666118886743:web:5477827769e3b780dfda12"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
