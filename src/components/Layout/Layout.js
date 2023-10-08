import React, { Component } from "react";

import { Outlet, Link } from 'react-router-dom';
import App from "../../App";
import './Layout.css';

const Layout = () => {
  return (
    <>
    
    <div className="background-image-container">
      <div className="headertext">
    <nav>
  <ul>
          <Link className="link" to="/">Főoldal</Link>
          
         <Link className="link" to="/aboutus">Rólunk</Link>
         
         <Link className="link" to="/ourservices">Szolgáltatásaink</Link>
         
         <Link className="link" to="/contact">Kapcsolat</Link>
         
         </ul>
        </nav>
        </div>
         </div>
    </>
  )
};

export default Layout;