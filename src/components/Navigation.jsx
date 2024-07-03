import React from "react";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';

function Navigation() {

  const user = useSelector((state) => state.userState.user);
  const count = useSelector((state) => state.counter.count);


  return (
    <>
   
{JSON.stringify(user)}



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://www.google.com"
                >
                  Home
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                {count}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
 
export default Navigation;
