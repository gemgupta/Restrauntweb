import React from 'react'
import { useState } from 'react'
import CartContext from './CartContext'
function CartProvider(props) {
const [items, setitem] = useState([])
    const addItemHandler=(item)=>{
setitem([...items, item])
    }
    const removeItenHandler= (id)=>{

    }
    const CartContext1= {
        item:items,
        totalAmount:0,
        addItem: addItemHandler,
        removeItem: removeItenHandler,
        msg: 'Hello'
    }
  return (
    <CartContext.Provider value={CartContext1}>
    
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider