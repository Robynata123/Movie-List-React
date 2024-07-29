import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="bg-color-primary flex relative z-40 h-[9vh] justify-center flex-between">
      <div className="container flex flex-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-center tracking-widest text-3xl uppercase sm:text-3xl">
            Movie List
          </Link>
          {/* Navbar Right */}
          <div className="flex justify-around text-center items-center">

            <nav className="link">
              <ul className="flex items-center gap-4">
                <li>
                  <Link to="/" className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" replace className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/tv" replace className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200">
                    Series
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
