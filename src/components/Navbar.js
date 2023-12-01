import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  faHome,
  faList,
  faCog,
  faPhone,
  faShop,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../CartContext";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const { cart } = useCart();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Shop",
      path: "/shop",
      icon: faShop,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: faPhone,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>dLovers
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cart.length > 0 && <div className="cart-badge">{cart.length}</div>}
        </Link>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
