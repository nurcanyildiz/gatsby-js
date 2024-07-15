import React from "react";
import Link from "gatsby"
import { container } from './layout.module.css'


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/product">Product </Link></li>
      </ul>
    </nav> 
  )
}

export default NavBar;


