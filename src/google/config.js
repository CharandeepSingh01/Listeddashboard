import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAC9AF-ngGRiP06X6eaS7yasnEKbmysQuM",
  authDomain: "listed-412da.firebaseapp.com",
  projectId: "listed-412da",
  storageBucket: "listed-412da.appspot.com",
  messagingSenderId: "43229391669",
  appId: "1:43229391669:web:ba08691c9e4fa5c8877a7c",
  measurementId: "G-9TV0CB8FLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};