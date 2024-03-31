import React from "react";
import "./Landinpage.css";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="main-landing">
      <div className="Newarrival">New Arrival</div>
      <div className="header-lan">
        <div className="left-lan">MIDNIGHT FASHION</div>
        <div className="center-lan">
          <Link to="/" className="link">
            <div className="center-text">Shop</div>
          </Link>
          <Link to="/" className="link">
            <div className="center-text">Store</div>
          </Link>
    
            <div className="center-text">About</div>
          
         
        </div>
        <div className="right-lan">
          <div className="line-div"><Link to={'users'} className="link">Users</Link></div>
          <div className="store-i">
            <Link to="./cart">
              <IoBagOutline className="breathing-icon" />
            </Link>
          </div>
        </div>
      </div>

      <div className="ima1"></div>
      <div className="ima2"></div>
      <div className="ima3"></div>

      <div className="text-lan">Welcome to our website</div>

      <div className="black-div">
        <div className="fashion">Fashion</div>
        <div className="fashion-con">
          Modern fashion trends reflect a dynamic blend of comfort and style,
          embracing sustainable materials and vibrant colors. The evolving
          landscape caters to diverse tastes, emphasizing self-expression and
          environmental consciousness.
        </div>
        <div className="shop-now">Shop Now</div>
      </div>

      <div className="barcode"></div>
    </div>
  );
}

export default Landingpage;
