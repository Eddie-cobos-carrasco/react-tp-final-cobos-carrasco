import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tienda-sus-cobos.firebaseapp.com",
  projectId: "tienda-sus-cobos",
  storageBucket: "tienda-sus-cobos.appspot.com",
  messagingSenderId: "800487171813",
  appId: "1:800487171813:web:9b4d5fc29721b37667160c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);