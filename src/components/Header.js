import React, {useContext} from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./CartContext";
import AuthContext from "./store/AuthContext";



const Header = (props) => {
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  const history = useNavigate()
   const {cart} = useContext(Cart);

   const logoutHandler =()=>{
    alert('are you want to log out ')
    authCtx.Logout()
    history('/login')
   }
  return (
    <>
    <div className="navBar" style={{padding:'10px'}}>
      <Nav className="justify-content-center" activeKey="/home" style={{padding:'2px'}} >
      
      {<div style={{margin:'20px'}}><Link to="/">HOME</Link></div>}
     {isLoggedIn&& <div style={{margin:'20px'}}><Link to="/store">STORE</Link></div>}
      {<div style={{margin:'20px'}}><Link to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link></div>}
      {<div style={{margin:'20px'}}><Link to ='/ContactUs'>Contact Us</Link></div>}
      {isLoggedIn&&<div style={{margin:'20px'}}><Link to="/login" onClick={logoutHandler}>Logout</Link></div>}
      {!isLoggedIn&&<div style={{margin:'20px'}}><Link to ='/login'>Log In</Link></div>}
      {!isLoggedIn&&<div style={{margin:'20px'}}><Link to ='/signup'>signUp</Link></div>}

      </Nav>
    </div>
    <div className="flex shopping-cart ">
      <h4 style={{color:'green',fontFamily:'Segoe Print'}}>Shopping Cart</h4>
      <Link to="/cart">
      {isLoggedIn&&<Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{cart.length}</sup>
      </Button>}
      </Link>
    </div>
    </>
  );
};





export default Header;