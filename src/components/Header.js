import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Cart } from "./CartContext";


const Header = (props) => {
   const {cart} = useContext(Cart);
  return (
    <>
    <div className="navBar" style={{padding:'10px'}}>
      <Nav className="justify-content-center" activeKey="/home" style={{padding:'2px'}} >
      <Link to="/home">HOME</Link>
      <span></span>
      <Link to="/store">STORE</Link>
      <Link to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link>
      </Nav>
    </div>
    <div className="flex shopping-cart ">
      <h4 style={{color:'green'}}>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{cart.length}</sup>
      </Button>
    </div>
    </>
  );
};





export default Header;