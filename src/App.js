import React from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard.js';
import Projects from './page/Projects.js';
import Agenda from './page/Agenda.js';
import Contact from './page/Contact.js';



function App() {
  return (
   <div>  
    <div  className='circlePosition w-[500px] h-[400px] bg-blue-200/90 rounded-[100%] translate-y-[-30%] translate-x-[-30%] blur-[120px] z-10 absolute top-0 '>
    </div>
    <div className='relative z-20'>
    <Router >
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    </div>

  );
}

export default App;

