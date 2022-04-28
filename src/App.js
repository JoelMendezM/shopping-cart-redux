import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/index';
import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer/CartContainer';

function App() {

  return (
   <>
    <Navbar/>
    <h1>React Toolkit</h1>
    <CartContainer/>
   </>
  );
}

export default App;
