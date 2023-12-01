import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { CartProvider } from "./CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Completion from "./pages/Completion";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/completion" element={<Completion />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
