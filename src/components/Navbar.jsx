function Navbar() {
    return (
      <nav className="bg-gray-800 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-center gap-6">
          <a href="#hero" className="text-gray-200 hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="text-gray-200 hover:text-indigo-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-200 hover:text-indigo-400 transition-colors">
            Skills
          </a>
          <a href="#about" className="text-gray-200 hover:text-indigo-400 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-200 hover:text-indigo-400 transition-colors">
            Contact
          </a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;