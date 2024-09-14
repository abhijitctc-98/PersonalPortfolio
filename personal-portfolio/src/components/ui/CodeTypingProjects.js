import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const CodeTypingProjects = () => {
  const projects = [
    'Project 1 - Portfolio Website',
    'Project 2 - E-Commerce Store',
    'Project 3 - Real-Time Chat App',
  ];

  return (
    <div className="relative bg-gray-900 text-white p-4 flex flex-col justify-center">
      {/* <div className="mb-8 text-lg">
        <TypingEffect text="const myProjects = [" />
        <ul>
          {projects.map((project, idx) => (
            <li key={idx} className="ml-8">
              <TypingEffect text={`"${project}",`} />
            </li>
          ))}
        </ul>
        <TypingEffect text="];" />
      </div> */}
      <div className="mb-8 text-lg">
      <TypingEffect text="{ Here are a few collection of mine }" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 p-4 rounded-md shadow-lg hover:scale-105 transition-all">
            <h3 className="text-lg font-bold">{project}</h3>
            <p>Description of {project}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeTypingProjects;
