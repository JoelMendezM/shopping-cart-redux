import React from 'react';
// import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
import './Navbar.css'
import { HiOutlineShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);


  return (
    <nav>
      <div className='nav-container'>
        <div>
          <h3>redux toolkit</h3>
        </div>
        <div className='nav-icon'>
          <h4><HiOutlineShoppingCart/></h4>
          <p>{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar