import React, {useState} from 'react'
import '../style/navbar.css'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({ handleFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
      const { value } = e.target;
      setSearchTerm(value);
      handleFilter(value);
  };

  return (
    <>
        <div className="navbar flex"> 

          <h1 className="text-2xl font-bold text-center m-2vh ">
          Movie List </h1>
          <div className='searchbar'>
            <FaSearch />
            <input type="text" 
            placeholder='Search a  movie...'
            value={searchTerm}
            onChange={handleChange}/>
          </div>
        </div>
    </>
  )
}

export default Navbar
