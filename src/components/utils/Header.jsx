import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="h-[10vh] container mx-auto flex items-center justify-between p-4">
        <div className="flex justify-between items-center w-full">
          <Link to="/home" className="text-white text-6xl font-title">
            MovieDB
          </Link>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/home" className="text-gray-300 hover:text-white">
                Popular
              </Link>
              <Link to="/top-rated" className="text-gray-300 hover:text-white">
                TopRated
              </Link>
              <Link to="/up-coming" className="text-gray-300 hover:text-white">
                Upcoming
              </Link>
            </div>
            <form onSubmit={handleSearch} className="flex items-center ml-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search movies..."
                className="px-3 py-2 rounded-md text-black"
                style={{ width: "200px" }}
              />
              <button
                type="submit"
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Search
              </button>
            </form>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white ml-4 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 fill-current ${isMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z" />
              </svg>
              <svg
                className={`h-6 w-6 fill-current ${isMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.293 6.293a1 1 0 1 0-1.414-1.414L12 10.586 6.12 4.706a1 1 0 1 0-1.414 1.414L10.586 12l-5.88 5.88a1 1 0 0 0 1.414 1.414L12 13.414l5.88 5.88a1 1 0 0 0 1.414-1.414L13.414 12l5.88-5.88z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden flex flex-col items-center mt-4 space-y-2`}
        >
          <Link to="/home" className="text-gray-300 hover:text-white">
            Popular
          </Link>
          <Link to="/top-rated" className="text-gray-300 hover:text-white">
            TopRated
          </Link>
          <Link to="/up-coming" className="text-gray-300 hover:text-white">
            Upcoming
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
