import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/thenortheastindia.jpeg'; // adjust path as needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="The NorthEast India Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/news" className="hover:text-yellow-400 transition">News</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 p-4 space-y-2 text-center">
          <Link to="/" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/news" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>News</Link>
          <Link to="/about" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
