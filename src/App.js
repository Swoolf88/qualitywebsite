import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';

function App() {
  return (
    <>
    <div className="app">
    <Router>
      <div>
        <Layout/>
        <Routes className="routes">
          <Route className="home" path="/" element={<Home />}/>
          <Route path="/aboutus" element={<AboutUs/>} />        
          <Route path="/ourservices" element={<OurServices/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    </div>    
    </>
      );
    }
    export default App;
