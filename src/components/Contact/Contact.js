import React, { Component } from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return ( 
    <>
    <p className="contacttext">
      Központi email címünk:<br></br> lakatos.ruzsicska@gmail.com<br></br><br></br>

Lakatos Gyula:<br></br>
Gépészmérnök <br></br>
Rendszerépítő Auditor<br></br>
+36/30 473 5926<br></br>
<br></br>
Ruzsicska István:<br></br>
Anyagmérnök/Környezetmérnök<br></br>
Vezető Auditor<br></br>
+36/70 508 6613<br></br>
    </p>
    <div className="blankspacecontact"></div>
    <Footer className="footeraboutus"></Footer>
    </>
    );
  };

export default Contact;