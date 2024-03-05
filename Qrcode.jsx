import React from 'react';

function Qrcode() {
  return (
    <>
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0" href="https://demos.creative-tim.com/material-dashboard/pages/dashboard" target="_blank">
            <img src="assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Lecturer Dashboard</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="lecturer-dashboard.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white active bg-gradient-primary" href="qr-code.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">view_in_ar</i>
                </div>
                <span className="nav-link-text ms-1 active bg-gradient-primary">Generate QR code</span>
              </a>
            </li>

            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="course-auth.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                </div>
                <span className="nav-link-text ms-1">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0"></div>
      </aside>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <h6 className="font-weight-bolder mb-0">Create Class</h6>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar"></div>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid py-4" id="main-admin">
          <div className="row mb-4 mt-4">
            <div className="col-md-10 mx-auto mb-4">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="row">
                    <div className="col-lg-6 col-7">
                      <h6>Create Class</h6>
                    </div>
                    <div className="col-lg-6 col-5 my-auto text-end">
                      <div className="dropdown float-lg-end pe-4">
                        <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="input-group input-group-outline row">
                    <h4 id="classTitle"></h4>
                    <div className="">
                      <div className="wrapper">
                        <div className="form">
                          <div className="d-flex align-items-center">
                            <select id="timerType" className="form-select px-2">
                              <option value="seconds">Seconds</option>
                              <option value="minutes">Minutes</option>
                            </select>
                            <input id="timerInput" type="number" className="form-control ms-2" placeholder="Enter timer value" /><br />
                            <input id="week" className="form-control ms-2" placeholder="Enter class week" readOnly />
                          </div>
                          <button id="searchbutton" className="btn btn-outline-primary mt-3 mb-5 btn-block" id="searchBtn" type="button">
                            Generate Code
                          </button>
                        </div>
                        <div className="generated">
                          <div className="qr-code">
                            <img src="qr-code.png" alt="qr-code" style={{ display: 'none' }} />
                            <p id="loading"></p>
                          </div>
                          <div className="countdown"></div>
                          <div className="random-link"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer py-4">
            <div className="container-fluid"></div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Qrcode;
