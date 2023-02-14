import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Cart } from "../CartContext";
import '../../App.css';


const Store = () => {
  const {productsArr, addToCart} = useContext(Cart);
  
  return (
    
    <div className="flex">
    
      {
      
      productsArr.map((item, index) => {
        
        
        return <div style={{width:'50%' }}>
        
          <div className="product-item">   
          <h3 style={{fontFamily:'Comic Sans MS'}}>{item.title}</h3>
          <div className="hover-image"><img src={item.imageUrl} width="30%"  /></div>
          <p>Price: ${item.price}</p>
          <Button className="button"
          onClick={() => addToCart(item)}
          >Add to Cart</Button>
          </div>
         </div>;
      })
      
      }
    </div>
  );
};

export default Store;