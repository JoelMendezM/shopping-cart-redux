import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem';

const CartContainer = () => {
const { cartItems, amount, total } = useSelector((state) => state.cart);


  return (
    <>
    { amount > 1 ?
      <section>
        <header>
          <h2>Your Cart</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}/>
          })}
        </div>
        <footer>
          <hr />
          <h4>
            Total: <span>${total}</span>  
          </h4>
          <button>Cleart cart</button>
        </footer>

      </section>
      
      :

      <section>
        <header>
          <h2>Your Cart</h2>
          <h4>Is empty</h4>
        </header>
      </section>
    }
    </>
  )
}

export default CartContainer