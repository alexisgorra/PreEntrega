import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCxypA665urANpg9h8aI3GoSY6u_nb5LY",
  authDomain: "taller-de-autos-50fc2.firebaseapp.com",
  projectId: "taller-de-autos-50fc2",
  storageBucket: "taller-de-autos-50fc2.appspot.com",
  messagingSenderId: "1012249223651",
  appId: "1:1012249223651:web:6a5833ff55c4208af7c0d6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
