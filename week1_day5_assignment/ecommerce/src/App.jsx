import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Store from "./store/Store";

const App = () => {
  return (
    <div className="App">
      <Provider store={Store}>
        <Navbar />
           <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
           </Routes>
      </Provider>
    </div>
  );
};

export default App;
