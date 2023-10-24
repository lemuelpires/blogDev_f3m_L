
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKAb9igGNcltCe1TUuJEjfway7F96TfIo",
  authDomain: "react-basic-lemuel.firebaseapp.com",
  projectId: "react-basic-lemuel",
  storageBucket: "react-basic-lemuel.appspot.com",
  messagingSenderId: "242296672230",
  appId: "1:242296672230:web:720daff5c2c8f9d81b5027",
  measurementId: "G-XBSP8CTRZX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);

export {db}