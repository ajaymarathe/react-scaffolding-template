import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../firebase';

function LoginScreen() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = JSON.stringify(result.user);
      console.log('User Info:', user);
      navigate('/chat', { state: { user } });
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="login-box">
          <h1>Welcome to ChatApp</h1>
          <p>Connect with your friends instantly</p>
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="google-logo"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
