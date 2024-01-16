import React, { useContext, useState } from 'react';
import { cartItemcontext } from '../App';
import './cartstyle.css';
import { Link } from 'react-router-dom';
import { IoBagOutline } from 'react-icons/io5';
import Data from '../Data';
import { Table } from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { LuMinus } from 'react-icons/lu';
import { MdClear } from "react-icons/md";


function Cart() {
  const [cartitem, setcartitem] = useContext(cartItemcontext);
  const [quantities, setQuantities] = useState(Array(cartitem.length).fill(1));

  const subtract = (index) => {
    const newQuantities = [...quantities];
    // Ensure the quantity doesn't go below 0
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const add = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const clear = (index) => {
    const newCartitem = [...cartitem];
    const newQuantities = [...quantities];

    // Remove the item at the specified index
    newCartitem.splice(index, 1);
    newQuantities.splice(index, 1);

    // Update the state
    setcartitem(newCartitem);
    setQuantities(newQuantities);
  }


  const subtotal = cartitem.reduce((acc, obj, index) => {
    return acc + obj.Price * quantities[index];
  }, 0);

  return (
    <div className="main-cart">
      <div className="header-lan">
       <div className="left-lan"> MIDNIGHT FASHION</div>
        <div className="center-lan">
          <div className="center-text">Shop</div>
          <div className="center-text">Store</div>
          <div className="center-text">About</div>
        </div>
        <div className="right-lan">
          <div className="line-div"></div>
          <div className="store-i">
            <Link>
              {" "}
              <IoBagOutline />
            </Link>
          </div>
        </div>
      </div>

      <div className="cartmap">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartitem.map((obj, index) => (
              <tr key={obj.id}>
                <td className="item-cell">
                  <div className="item-content">
                    <img src={obj.src} alt="" />
                    <span>{obj.name}</span>
                  </div>
                </td>
                <td className='price-bold'>{obj.Price}rs</td>

                <td>
                  <div className="qnty-div">
                    <div className="left-side">
                      <button onClick={() => subtract(index)}>
                        <LuMinus />
                      </button>
                    </div>
                    <div className="center">{quantities[index]}</div>
                    <div className="right-side">
                      <button onClick={() => add(index)}>
                        <IoMdAdd />
                      </button>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="dis">
                    <div className="text-dis">{obj.Price * quantities[index]}rs</div>
                    <div className="icon-dis">
                      <button onClick={() => clear(index)}>
                        <MdClear className='clear-icon' />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<div className="f">
<div className="bill-div">
  <div className="contents">
  <div className="subtotal">
          <div className="text">Subtotal</div>
          <div className="text-data">{subtotal}rs</div>
        </div>
        <div className="delivery">
        <div className="text">DeLivery Charge</div>
          <div className="text-data">40rs</div>
        </div>
        <div className="grand-total">
        <div className="text">Grand Total</div>
          <div className="text-data">{subtotal + 40}rs</div>
        </div>
  </div>
</div>

        
      
</div>
  


     
    </div>
  );
}

export default Cart;
