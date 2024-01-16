import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mappage from "./Components/Mappage";
import { createContext, useState } from "react";
import Cart from "./Components/Cart";
import Landingpage from "./LANDINGPAGE/Landingpage";
import Data from './Data'

const datacontext = createContext();
const cartStatecontext = createContext();
const cartItemcontext = createContext();

function App() {
  const [data, setdata] = useState(Data);
  const [cartStates, setCartStates] = useState([]);
  const [cartitem,setcartitem] = useState([]);

  console.log(Data);

  return (
    <div>
      <datacontext.Provider value={[data, setdata]}>
        <cartStatecontext.Provider value={[cartStates, setCartStates]}>
          <cartItemcontext.Provider value={[cartitem,setcartitem]}>
            
            <BrowserRouter>
              <Routes>
              
                <Route path="/" element={<><Landingpage/><Mappage/></>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                
              </Routes>
            </BrowserRouter>
          </cartItemcontext.Provider>
        </cartStatecontext.Provider>
      </datacontext.Provider>
    </div>
  );
}

export default App;
export { datacontext, cartStatecontext,cartItemcontext };
