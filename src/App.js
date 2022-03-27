import "./fast.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductFeed from "./components/ProductFeed";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductFeed />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* Home , Productfeed, Cart, Wishlist  */}
    </div>
  );
}

export default App;
