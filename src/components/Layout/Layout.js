import React from "react";

import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <>
    
    <div className="background-image-container">
      <div className="headertext">
    <nav>
  <ul>
        <div className="menucontainer">
          <Link to="/">          
            <div className="menulinkmainpage">
              Főoldal
            </div>          
          </Link>          
          
         <Link to="/aboutus">
          <div className="menulinkaboutus">
            Rólunk
          </div>
         </Link>
         
         <Link to="/ourservices">
          <div className="menulinkourservices">
            Szolgáltatásaink
          </div>
         </Link>
         
         <Link to="/contact">
          <div className="menulinkcontact">
           Kapcsolat
          </div>
         </Link>
         </div>         
         </ul>
        </nav>
        </div>
         </div>
    </>
  )
};

export default Layout;
