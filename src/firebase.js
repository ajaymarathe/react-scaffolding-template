// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWR54DMEP314HLVOxF2dVnPGiV4a3SNZs",
  authDomain: "react-realtime-chat-app-f79f5.firebaseapp.com",
  projectId: "react-realtime-chat-app-f79f5",
  storageBucket: "react-realtime-chat-app-f79f5.appspot.com",
  messagingSenderId: "294830241006",
  appId: "1:294830241006:web:7318f89a52458db83eefff",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
