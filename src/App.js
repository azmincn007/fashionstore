import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Landingpage from "./LANDINGPAGE/Landingpage";
import Cards from "./LANDINGPAGE/Cards";
import CardsDetails from "./LANDINGPAGE/CardsDetails";
import Users from "./LANDINGPAGE/Users";

const datacontext = createContext();
const cartStatecontext = createContext();
const cartItemcontext = createContext();

function App() {
  

 

  return (
    <div>
            
            <BrowserRouter>
              <Routes>
              
                <Route path="/" element={<><Landingpage/> <Cards/></>}></Route>
                <Route path="/product/:id" element={<CardsDetails/>} />
                <Route path="/users" element={<Users/>} />
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
export { datacontext, cartStatecontext,cartItemcontext };
