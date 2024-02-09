// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  // Sample data for buttons
  const buttonsData = [
    { id: 1, name: 'Button 1' },
    { id: 2, name: 'Button 2' },
    { id: 3, name: 'Button 3' },
    { id: 4, name: 'Button 4' },
  ];

  return (
    <div className='grid grid-cols-2 gap-10'>
       {buttonsData.map(button => (
         <Link key={button.id} to={`/profile/${button.id}`} className='bg-blue-300 py-4 px-2 rounded-xl'>{button.name}</Link>
       ))}
    </div>
  );
}

export default Projects;
