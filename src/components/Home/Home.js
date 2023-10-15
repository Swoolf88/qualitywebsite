import React from "react";

import iso90012015 from '../images/iso90012015.png';
import iso14001 from '../images/iso14001.jpg';
import natoaqap from '../images/natoaqap.jpg';
import Footer from "../Footer/Footer";

const Home = () => {
  return ( 
    <>
        <p className="hometext">Üdvözöljük cégünk honlapján.<br></br><br></br>
Vállalatirányítási rendszerekkel és Mérnöki tevékenységgel foglalkozó vállalkozásunk szeretném az Önök figyelmébe ajánlani. Vállalkozásunk összesítve több mint 20 éves szakmai tapasztalattal rendelkezik.
<br></br>
<br></br>
Kérem olvassa el vállalkozásunk bemutatkozóját vagy tekintse meg szolgáltatásainkat. Árajánlatunkat díjmentesen elkészítjük.
<br></br>
<br></br>
Amennyiben felkeltettük érdeklődését a kapcsolatoknál megtalálja elérhetőségeinket.</p><br></br>
    <img className="iso9001" src={iso90012015} width="150" height="150" alt="iso9001"/>
    <img className="iso14001" src={iso14001} width="150" height="150" alt="iso14001"/>    
    <img className="natoaqap" src={natoaqap} width="150" height="150" alt="natoaqap"/>
    <div className="blankspacehome"></div>
    <Footer className="footeraboutus"></Footer>
  </>    
  );
};

export default Home;