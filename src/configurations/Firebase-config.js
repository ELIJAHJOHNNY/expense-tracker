import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_TENANT_API_KEY,
  authDomain: "xpencetrack.firebaseapp.com",
  projectId: "xpencetrack",
  storageBucket: "xpencetrack.appspot.com",
  messagingSenderId: process.env.REACT_APP_TENANT_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_TENANT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app)
// auth.languageCode = 'it';
