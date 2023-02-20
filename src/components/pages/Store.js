import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Cart } from "../CartContext";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Store = () => {
  const { productsArr, addToCart } = useContext(Cart);
  

  return (
    <div className="flex">
      {productsArr.map((item, index) => {
        return (
          <div style={{ width: "50%",paddingBottom:'5%' }}>
            <div className="product-item">
              <h3 style={{ fontFamily: "Comic Sans MS" }}>{item.title}</h3>
              <Link to={`/product/${item.id}`}>
                <div className="hover-image">
                  <img src={item.imageUrl} width="30%" />
                </div>
              </Link>
              <p>Price: ${item.price}</p>
              <Button className="button" onClick={() => addToCart(item)}>
                Add to Cart
              </Button>
              
            </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default Store;
