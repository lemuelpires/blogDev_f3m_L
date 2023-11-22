
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCuF2vkxeP7qDWly7mxBOc_FmPOG0YlyA8",
  authDomain: "blogdev-lemuel.firebaseapp.com",
  projectId: "blogdev-lemuel",
  storageBucket: "blogdev-lemuel.appspot.com",
  messagingSenderId: "661860429709",
  appId: "1:661860429709:web:c5c3904a584ccdb522d7c4",
  measurementId: "G-5NJ7GDLM9Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);

export {db}