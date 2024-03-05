import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase"; // Import 'auth' and 'db' from Firebase
import { doc, setDoc } from "firebase/firestore"; // Import 'doc' and 'setDoc' from Firestore
import { useNavigate } from "react-router-dom"; // Import 'useNavigate' hook from react-router-dom

function Registeradmin() {
  const navigate = useNavigate(); // Use the 'useNavigate' hook to navigate

  const handleSignUp = async (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("UID", user.uid);

      await setDoc(doc(db, "admins", user.uid), {
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        isSuperAdmin: true
      });

      console.log("New User Account created");

      // Redirect to dashboard
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  return (
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex flex-column mx-auto">
              <div className="card card-plain">
                <div className="card-header">
                  <h4 className="font-weight-bolder">Register</h4>
                  <p className="mb-0">Enter your email and password to register</p>
                </div>
                <div className="card-body">
                  <form role="form">
                    <div className="form-group mb-3">
                      <label className="form-label">Firstname</label>
                      <div className="input-group input-group-outline">
                        <input type="text" className="form-control" id="firstname" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label">Lastname</label>
                      <div className="input-group input-group-outline">
                        <input type="text" className="form-control" id="lastname" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label">Email</label>
                      <div className="input-group input-group-outline">
                        <input type="text" className="form-control" id="email" />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label className="form-label">Password</label>
                      <div className="input-group input-group-outline">
                        <input type="password" className="form-control" id="password" />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="button" id="signUp" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" onClick={handleSignUp}>
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-2 text-sm mx-auto">
                    Already have an account?
                    <a href="/signin" className="text-primary text-gradient font-weight-bold">Sign in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registeradmin;
