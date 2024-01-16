import React, { useContext, useEffect, useState } from "react";
import "./mapstyle.css";
import axios from "axios";
import { FaCartArrowDown } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { cartItemcontext, cartStatecontext, datacontext } from "../App";
import { Button } from "react-bootstrap";
import { GrCart } from "react-icons/gr";
import { IoBagCheckSharp } from "react-icons/io5";

function Mappage() {
  const [data, setdata] = useContext(datacontext);
  const [cartStates, setCartStates] = useContext(cartStatecontext);
  const [cartitem, setcartitem] = useContext(cartItemcontext);

 

  const addtocartt = (index) => {
    const updatedCartStates = [...cartStates];
    updatedCartStates[index] = !updatedCartStates[index];
    setCartStates(updatedCartStates);
  };

  useEffect(() => {
    const cartItems = data.filter((_, index) => cartStates[index]);
    setcartitem(cartItems);
  }, [cartStates, data]);
  // console.log(cartitem);

  return (
    <div className="main-container">
      <div className="container">
        <div className="text">
          <h2>Check out our products</h2>
        </div>
        {/* <div className="card-map">
          {data.map((obj, index) => (
            <div className="card-container" key={index}>
              <div className="top">
                <img src={obj.image} alt="" />
              </div>
              {cartStates[index] ? (
                <h1>added to cart</h1>
              ) : (
                <>
                  <div className="bottom">
                    <div className="left">
                      <div className="contents">
                        <h2>{obj.category}</h2>
                        <h3>{obj.price}</h3>
                      </div>
                    </div>
                    <div className="right">
                      <button
                        onClick={() => addtocartt(index)}
                        disabled={cartStates[index]}
                      >
                        <FaCartArrowDown className="cartbutton" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div> */}

      

        <div className="card-map">
          {data.map((obj, index) => (
            <>
              <div className="card-container">
                <div className="top">
                  <img
                    src={obj.src}
                    alt=""
                  />
                </div>
                <div className="bottom">
                  <div className="ts">
                  <div className="bottom-det"> <p className="brand-name">{obj.brand}</p></div>
                    <div className="bottom-det"> <p className="product-name">{obj.name}</p></div>
                    <div className="bottom-det"><p className="price">{obj.Price}</p></div>
                  </div>
                   
                

                  <div className="butto">
                    {cartStates[index] ? < IoBagCheckSharp className="cart-done"/>:<>  <Button    onClick={() => addtocartt(index)}
                        disabled={cartStates[index]}  variant="primary">ADD TO CART  <GrCart className="addto"/></Button></>}
                
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <Link to="./cart" className="cart-icon">
          <CiShoppingCart className="pinkcart" />
        </Link> */}

      {/* </div> */}
    </div>
  );
}

export default Mappage;
