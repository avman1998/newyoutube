import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZFx77UHQ_AWiuRVTPZXVU6ZMmEOBpKDQ",
  authDomain: "new-371003.firebaseapp.com",
  projectId: "newyoutube-371003",
  storageBucket: "newyoutube-371003.appspot.com",
  messagingSenderId: "560016612073",
  appId: "1:560016612073:web:6906a04bac96493023ee78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
