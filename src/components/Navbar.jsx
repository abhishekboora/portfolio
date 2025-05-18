import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Portfolio</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#hero" className="block py-2 hover:text-gray-300">Home</a>
          <a href="#about" className="block py-2 hover:text-gray-300">About</a>
          <a href="#projects" className="block py-2 hover:text-gray-300">Projects</a>
          <a href="#skills" className="block py-2 hover:text-gray-300">Skills</a>
          <a href="#contact" className="block py-2 hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;