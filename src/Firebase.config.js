// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA-eiB6q1Rb1SkFo-2Ck-eZh0EovnpIWEg",
  authDomain: "arrowtelelink-dbdde.firebaseapp.com",
  projectId: "arrowtelelink-dbdde",
  storageBucket: "arrowtelelink-dbdde.appspot.com",
  messagingSenderId: "37357715448",
  appId: "1:37357715448:web:41b6343e4955bb6976a00d",
  measurementId: "G-ZSKLDB047H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db};



// Initialize Firebase
