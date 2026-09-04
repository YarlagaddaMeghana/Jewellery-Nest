import React from 'react'
import "../styles/nav.css"
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faCartShopping,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/images/logo.png'


const Nav = () => {

  return (

    <nav>

      {/* ================= LOGO ================= */}

      <div className="nav-logo">

        <Link to="/">
          <img
            src={logo}
            alt="jewellerynest logo"
          />
        </Link>

      </div>


      {/* ================= MAIN LINKS ================= */}

      <div className="nav-link">

        <Link to="/">
          Home
        </Link>

        <Link to="/Products">
          All Products
        </Link>

        <Link to="/NewArrivals">
          New Arrivals
        </Link>

        {/* FIND YOUR MATCH */}

        <Link to="/FindJewellery" className="find-match-link">
          Find Your Match
        </Link>

      </div>


      {/* ================= CATEGORIES ================= */}

      <div className="categories-menu">

        <span className="category-title">
          Categories
        </span>


        <div className="category-dropdown">


          {/* ================= FOR HIM ================= */}

          <div className="category-column">

            <h3>For Him</h3>

            <Link to="/MenRings">
              Rings
            </Link>

            <Link to="/MenChains">
              Chains
            </Link>

            <Link to="/MensBracelets">
              Bracelets
            </Link>

          </div>


          {/* ================= FOR HER ================= */}

          <div className="category-column">

            <h3>For Her</h3>

            <Link to="/Rings">
              Rings
            </Link>

            <Link to="/Necklaces">
              Necklaces
            </Link>

            <Link to="/Earrings">
              Earrings
            </Link>

            <Link to="/Bracelets">
              Bracelets
            </Link>

          </div>

        </div>

      </div>


      {/* ================= ICONS ================= */}

      <div className="nav-icons">


        {/* ================= LOGIN ================= */}

        <Link to="/Login">
          Login
        </Link>


        {/* ================= WISHLIST ================= */}

        <Link to="/Wishlist">

          <FontAwesomeIcon icon={faHeart} />

        </Link>


        {/* ================= CART ================= */}

        <Link to="/Cart">

          <FontAwesomeIcon icon={faCartShopping} />

        </Link>


        {/* ================= PROFILE ================= */}

        <Link to="/Profile">

          <FontAwesomeIcon icon={faUser} />

        </Link>


      </div>

    </nav>

  )

}

export default Nav