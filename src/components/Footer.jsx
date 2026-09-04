import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {

  return (

    <footer className="footer">


      {/* =========================
          TOP FOOTER
      ========================= */}

      <div className="footer-top">


        {/* BRAND */}

        <div className="footer-brand">

          <h2>
            JewelleryNest
          </h2>

          <p>
            Timeless jewellery crafted to celebrate
            your most beautiful moments.
          </p>

          <p className="footer-tagline">
            Wear your story. Wear your elegance.
          </p>

        </div>


        {/* SHOP */}

        <div className="footer-column">

          <h3>
            SHOP
          </h3>

          <Link to="/Products">
            All Products
          </Link>

          <Link to="/NewArrivals">
            New Arrivals
          </Link>

          <Link to="/TrendingPage">
            Trending
          </Link>

          <Link to="/Gifts">
            Gifts
          </Link>

        </div>


        {/* COLLECTIONS */}

        <div className="footer-column">

          <h3>
            COLLECTIONS
          </h3>

          <Link to="/Rings">
            Women's Rings
          </Link>

          <Link to="/Necklaces">
            Necklaces
          </Link>

          <Link to="/Earrings">
            Earrings
          </Link>

          <Link to="/Bracelets">
            Women's Bracelets
          </Link>

          <Link to="/MenRings">
            Men's Rings
          </Link>

          <Link to="/MenChains">
            Men's Chains
          </Link>

        </div>


        {/* CUSTOMER */}

        <div className="footer-column">

          <h3>
            CUSTOMER CARE
          </h3>

          <Link to="/Cart">
            Shopping Cart
          </Link>

          <Link to="/Wishlist">
            Wishlist
          </Link>

          <Link to="/Orders">
            My Orders
          </Link>

          <Link to="/TrackOrders">
            Track Order
          </Link>

          <Link to="/Profile">
            My Profile
          </Link>

        </div>


      </div>


      {/* =========================
          NEWSLETTER
      ========================= */}

      <div className="footer-newsletter">

        <div className="newsletter-text">

          <h3>
            Stay In The Know
          </h3>

          <p>
            Be the first to discover new collections,
            exclusive pieces and special offers.
          </p>

        </div>


        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            SUBSCRIBE
          </button>

        </div>

      </div>


      {/* =========================
          BOTTOM FOOTER
      ========================= */}

      <div className="footer-bottom">

        <p>
          © 2026 JewelleryNest. All rights reserved.
        </p>


        <div className="footer-bottom-links">

          <Link to="/">
            Privacy Policy
          </Link>

          <Link to="/">
            Terms & Conditions
          </Link>

        </div>


        <p className="footer-made">
          Crafted with elegance ✦
        </p>

      </div>


    </footer>

  )

}

export default Footer