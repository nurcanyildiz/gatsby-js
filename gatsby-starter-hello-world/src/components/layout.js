import * as React from 'react'
import { Link } from 'gatsby'
import NavBar from './navbar'
// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText
// } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/product">Product </Link></li>
      </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout