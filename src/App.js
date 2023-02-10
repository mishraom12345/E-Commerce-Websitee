import logo from './logo.svg';
import './App.css';
import { productsArr } from './Component/Item/ProductList';
import React from 'react';




const App =()=>{
  const items = productsArr.map(item=>(
    <li>
      <h4>{item.title}</h4>
      <img src = {item.imageUrl} />
      <p>price: {item.price}</p>

    </li>
  ))
  return(
    <div >
      <ul>{items}</ul>
    </div>
  )
}

export default App;