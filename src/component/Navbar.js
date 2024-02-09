import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Vector from '../Logo/Vector.png';

function Navbar() {
  const location = useLocation();

  return (
    <div className='flex justify-center'>
      <div className='my-3 w-[94%] flex justify-between items-center bg-customLightBlue rounded-full py-2 px-12'>
        <div className='flex items-center '>
          <img src={Vector} className='pl-4' alt="Vector" />
          <ul className='flex px-10 font-[700]'>
            <li className={`px-6 ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">Dashboard</Link>
            </li>
            <li className={`px-6 ${location.pathname === '/projects' ? 'active' : ''}`}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={`px-6 ${location.pathname === '/agenda' ? 'active' : ''}`}>
              <Link to="/agenda">Agenda</Link>
            </li>
            <li className={`px-6 ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <button className='bg-customBlue text-white px-10 py-3 rounded-full text-[20px]'>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
