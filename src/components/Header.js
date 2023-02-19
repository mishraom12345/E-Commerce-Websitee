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
      
      <div style={{margin:'20px'}}><Link to="/home">HOME</Link></div>
      <div style={{margin:'20px'}}><Link to="/store">STORE</Link></div>
      <div style={{margin:'20px'}}><Link to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link></div>
      <div style={{margin:'20px'}}><Link to ='/ContactUs'>Contact Us</Link></div>
      <div style={{margin:'20px'}}><Link to ='/login'>Log In</Link></div>
      </Nav>
    </div>
    <div className="flex shopping-cart ">
      <h4 style={{color:'green',fontFamily:'Segoe Print'}}>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{cart.length}</sup>
      </Button>
    </div>
    </>
  );
};





export default Header;