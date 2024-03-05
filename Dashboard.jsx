import React from 'react';

function Dashboard() {
  return (
    <div className="g-sidenav-show bg-gray-200">
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <div className="sidenav-header">
          <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a className="navbar-brand m-0" href="https://demos.creative-tim.com/material-dashboard/pages/dashboard" target="_blank">
            <img src="assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">Admin Dashboard</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white active bg-gradient-primary" href="dashboard.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="create-user.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">person</i>
                </div>
                <span className="nav-link-text ms-1">Create Student</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="create-course.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">school</i>
                </div>
                <span className="nav-link-text ms-1">Create Course</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="admin-auth.html">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">login</i>
                </div>
                <span className="nav-link-text ms-1">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          {/* Footer content */}
        </div>
      </aside>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Pages</a></li>
                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
              </ol>
              <h6 className="font-weight-bolder mb-0">Dashboard</h6>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar"></div>
            <ul className="navbar-nav  justify-content-end">
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
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-xl-0 mb-4 mx-auto">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">person</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Students</p>
                    <h4 className="mb-0" id="studentAmt"></h4>
                  </div>
                </div>
                <div className="card-footer p-3"></div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-xl-0 mb-4 mx-auto"></div>
          </div>
          <div className="row mb-4 mt-4">
            <div className="col-md-10 mx-auto mb-4">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="row">
                    <div className="col-lg-6 col-7">
                      <h6>Students</h6>
                    </div>
                    <div className="col-lg-6 col-5 my-auto text-end">
                      <div className="dropdown float-lg-end pe-4">
                        <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" id="dropdown" aria-labelledby="dropdownTable">
                          <li><a className="dropdown-item border-radius-md" href="create-user.html">Create Student</a></li>
                          <li><a className="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="input-group input-group-outline row">
                    <input type="text" id="searchbar" className="form-control col-12 col-md-6" placeholder="Search Students" />
                    <div className="input-group-append col-12 col-md-6 d-flex justify-content-between">
                      <select className="form-select w-50 col-3" id="CategorySelected">
                        <option selected>By Name</option>
                        <option value="1">By Matric number</option>
                        <option value="2">By Email</option>
                        <option value="3">By Course</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">#</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Name</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Matno</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Course</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Email</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Level</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Status</th>
                        <th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7" scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody id="tbody1"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer py-4">
            <div className="container-fluid"></div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
