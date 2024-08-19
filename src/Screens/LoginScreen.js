import React from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  provider,
  signInWithPopup,
  db,
  doc,
  getDoc,
  setDoc,
} from "../firebase";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LoginScreen() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user already exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // If the user doesn't exist, create a new entry
        await setDoc(userRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date().toISOString(),
        });
        console.log("User added to Firestore:", user);
      } else {
        console.log("User already exists in Firestore:", user);
      }

      let userData = JSON.stringify(user);

      // Navigate to chat screen with user data
      navigate("/chat", { state: { user: userData } });
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="login-box">
          <h1>Welcome to ChatApp</h1>
          <p>Connect with your friends instantly</p>
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <FontAwesomeIcon style={{ marginRight: '1em'}} icon={faGoogle} className="google-icon" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
