import NavBar from './Layout/Navigation/NavBar';
import Footer from './Layout/Footer/Footer';
import  Home from "./Pages/Home";
import  ProductDetails from "./Pages/ProductDetails";
import './App.css';
import "./sass/index.css";
import {Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
function App() {
  return (
   <>  
   <NavBar />
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route exact path="/products/:id" element={<ProductDetails />} /> 
    <Route exact path="/cart" element={<Cart />} /> 
    </Routes>   
    <Footer />
   </>
  );
}

export default App;
