import React, { useEffect, useState, useContext } from "react";
import { Cart } from "./CartContext";
import "../App.css";
import { Button } from "react-bootstrap";

const CartList = () => {
  const [CART, setCART] = useState([]);

  const { cart } = useContext(Cart);
  const removehandler =()=>{
    setCART([])
    
  }

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const purchaseHandler =()=>{
    alert('you order succesfully placed')
    setCART([])
    
  }
  return (
    <div style={{ float: "right" }}>
        
      {CART?.map((item, itemindex) => {
        return (

          <div>
            
            <img src={item.imageUrl} width={70} />
            <span><h4>{item.title}</h4></span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span>Price: {item.price * item.quantity}</span>
          </div>
        );
      })}
      <p>
        <b>Total Amount $ </b><span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
        {CART.length>0&& <Button onClick={purchaseHandler}>Purchase</Button>}
      </p>
    </div>
  );
};

export default CartList;
