import React from 'react'
import "../style.css";
import {Link} from "react-router-dom"

function Home() {
  return (
    <body className="bg-gray-200">
        <main className="main-content mt-0">
          <section>
            <div className="page-header min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="card card-plain">
                      <div className=" text-center">
                        <h2 className="font-weight-bolder ">Administration portal</h2>
                        <h5 className="mb-0 font-weight-light text-primary">Select your role</h5>
                      </div>
                      <div className="row w-xl-50 w-75 mx-auto">
                        <a href="course-auth.html" className="col-md-6 mt-4 mb-4">
                          <div className="card z-index-2 bg-gradient-success shadow-success text-white card-hover">
                            <Link to="Courseauth" style={{textDecoration:"none"}}>
                            <div className="card-body">
                              <i className="material-icons opacity-10" style={{ fontSize: '50px' }}>school</i>
                              <hr className="dark horizontal" />
                              <h4 className="mb-0" style={{ color: 'white' }}> Lecturer </h4>
                              <div className="d-flex">
                                {/* <i className="material-icons text-sm my-auto me-1">schedule</i>
                                <p className="mb-0 text-sm"> updated 4 min ago </p> */}
                              </div>
                            </div>
                            </Link>
                          </div>
                          
                        </a>
                        <a href="admin-auth.html" className="col-md-6 mt-4 mb-4">
                          <div className="card z-index-2 bg-gradient-dark shadow-dark text-white card-hover">
                          <Link to="Adminauth" style={{textDecoration:"none"}}>
                            <div className="card-body">
                              <i className="material-icons opacity-10" style={{ fontSize: '50px' }}>settings</i>
                              <hr className="dark horizontal" />
                              <h4 className="mb-0" style={{ color: 'white' }}> Admin </h4>
                              <div className="d-flex">
                                {/* <i className="material-icons text-sm my-auto me-1">schedule</i>
                                <p className="mb-0 text-sm"> updated 4 min ago </p> */}
                              </div>
                            </div>
                            </Link>
                          </div>
                        </a>
                      </div>
                      {/* <div className="card-footer text-center pt-0 px-lg-2 px-1">
                        <p className="mb-2 text-sm mx-auto">
                          Don't have an account?
                          <a href="register-admin.html" className="text-primary text-gradient font-weight-bold">Sign up</a>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
          </body>
  )
}

export default Home