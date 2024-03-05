import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase"; // Import 'auth' and 'db' from Firebase
import { doc, getDoc } from "firebase/firestore"; // Import 'doc' and 'getDoc' from Firestore
import { useNavigate } from "react-router-dom"; // Import 'useNavigate' hook from react-router-dom


function Courseauth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use the 'useNavigate' hook to navigate

  const handleSignIn = async () => {
    try {
      // Perform sign-in operation using Firebase Auth
      // Replace 'auth' with your Firebase auth instance
      await signInWithEmailAndPassword(auth, `${email}@gmail.com`, password);
      
      // Handle successful sign-in
      // Redirect or perform any necessary actions
      const user = auth.currentUser;
      localStorage.setItem("UID", user.uid);
      validateUser(user.uid);
    } catch (error) {
      // Handle sign-in errors
      console.error("Sign-in error:", error.message);
    }
  };

  async function validateUser(id) {
    try {
      const ndocRef = doc(db, "courses", id);
      const nsnapshot = await getDoc(ndocRef);

      if (nsnapshot.exists()) {
        // Redirect to dashboard if user exists
        navigate(`/Lecturerdashboard?name=${id}`);
      } else {
        console.error("User not found");
      }
    } catch (err) {
      console.error("Validation error:", err.message);
    }
  }

  return (
    <div className="page-header min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-md-7 d-flex flex-column mx-auto">
            <div className="card">
              <div className="card-header">
                <h4 className="font-weight-bolder">Log in</h4>
                <p className="mb-0">Enter course and password to Log in</p>
              </div>
              <div className="card-body">
                <form role="form" >
                  <div className="form-group mb-3">
                    <label className="form-label">Course <i className="material-icons opacity-10" style={{ fontSize: '15px' }} data-toggle="tooltip" data-placement="top" title="your username are the characters before the @sign in your email">info</i></label>
                    <div className="input-group input-group-outline">
                      <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group input-group-outline">
                      <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" id="signUp" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" onClick={handleSignIn}>
                      Log in
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-2 text-sm mx-auto">
                  Don't have an account?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courseauth;
