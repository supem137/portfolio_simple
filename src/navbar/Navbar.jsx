import logo from '../../public/logo.svg';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="text-gray-400 mx-7">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between py-8">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <div className="flex mr-5 space-x-6 font-bold">
            <Link
              smooth
              to="/#projects"
              className="transition duration-300 hover:text-violet-400"
            >
              Projects
            </Link>
            <Link
              smooth
              to="/#skills"
              className="transition duration-300 hover:text-violet-400"
            >
              Skills
            </Link>
            <Link
              smooth
              to="/#contact"
              className="transition duration-300 hover:text-violet-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
