import logo from './logo.svg';

import { productsArr } from './Component/Item/ProductList';
import React, { useState } from 'react';
import CartElements from './Component/Cart/CartElements';
import ColorSchemesExample from './Component/Button/Navbar';
import CartButton from './Component/Button/CartButton';
import './ProductList.css'








const App =()=>{
  const [showcart,setshowcart]=useState(false)

  const showcartHandler =()=>{
    setshowcart(true)
  }
  const deleteHandler =()=>{
    setshowcart(false)
  }

  const items = productsArr.map(item=>(
    <ul  >
      <li style={{
        marginRight: "10px",
        padding: "10px",
        float:'right'
      }}>
      <h4>{item.title}</h4>
      <img src = {item.imageUrl} />
      <p>price: {item.price}</p>

    </li>
    </ul>
  ))
  return(
    
    <div >

      <ColorSchemesExample /> 
      
      <CartButton onClick = {showcartHandler}/>
      {showcart && <CartElements onClick = {deleteHandler}/>}
      <ul >{items}</ul>
      
    </div>
  )
}

export default App;