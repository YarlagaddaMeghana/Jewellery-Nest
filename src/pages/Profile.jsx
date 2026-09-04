import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/userSlice'
import '../styles/profile.css'

const Profile = () => {

  let navigate = useNavigate()
  let dispatch = useDispatch()

  let user = useSelector((state) => state.user.user)

  // =========================
  // COUNTS
  // =========================

  let [orderCount, setOrderCount] = useState(0)
  let [wishlistCount, setWishlistCount] = useState(0)
  let [cartCount, setCartCount] = useState(0)


  // =========================
  // GET COUNTS FROM LOCAL STORAGE
  // =========================

  const updateCounts = () => {

    // ORDERS
    let orders =
      JSON.parse(localStorage.getItem("orders")) || []

    setOrderCount(orders.length)


    // WISHLIST
    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || []

    setWishlistCount(wishlist.length)


    // CART
    let cart =
      JSON.parse(localStorage.getItem("cart")) || []

    let totalCartItems = cart.reduce((sum, item) => {

      return sum + (item.quantity || 1)

    }, 0)

    setCartCount(totalCartItems)

  }


  // =========================
  // UPDATE COUNTS
  // =========================

  useEffect(() => {

    updateCounts()


    // Updates when localStorage changes
    window.addEventListener("storage", updateCounts)


    // Updates when changes happen in same tab
    window.addEventListener("cartUpdated", updateCounts)
    window.addEventListener("wishlistUpdated", updateCounts)
    window.addEventListener("ordersUpdated", updateCounts)


    return () => {

      window.removeEventListener("storage", updateCounts)

      window.removeEventListener("cartUpdated", updateCounts)
      window.removeEventListener("wishlistUpdated", updateCounts)
      window.removeEventListener("ordersUpdated", updateCounts)

    }

  }, [])


  // =========================
  // IF USER IS NOT LOGGED IN
  // =========================

  if (!user) {

    return (

      <div className="profile-login-page">

        <div className="profile-login-box">

          <p className="small-heading">
            JEWELLERYNEST
          </p>

          <h1>
            Your Account Awaits
          </h1>

          <div className="gold-line"></div>

          <p className="login-message">
            Please sign in to view your profile,
            manage your orders and explore your
            JewelleryNest account.
          </p>

          <div className="profile-login-buttons">

            <button
              onClick={() => navigate("/Login")}
            >
              SIGN IN →
            </button>

            <button
              onClick={() => navigate("/Register")}
              className="register-button"
            >
              CREATE ACCOUNT
            </button>

          </div>

        </div>

      </div>

    )

  }


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    dispatch(logout())

    alert("Logged out successfully!")

    navigate("/Login")

  }


  return (

    <div className="profile-page">


      {/* =========================
          PAGE HEADING
      ========================= */}

      <div className="profile-heading">

        <p>
          MY ACCOUNT
        </p>

        <h1>
          Profile
        </h1>

        <span></span>

      </div>


      {/* =========================
          PROFILE CONTAINER
      ========================= */}

      <div className="profile-container">


        {/* =========================
            LEFT SIDEBAR
        ========================= */}

        <div className="profile-sidebar">

          <div className="profile-user">

            <h2>
              Welcome to JewelleryNest
            </h2>

            <div className="profile-gold-line"></div>

            <p>
              Manage your account
            </p>

          </div>


          <div className="profile-menu">


            {/* USER DETAILS */}

            <Link
              to="/Profile"
              className="profile-menu-item active"
            >

              <span className="menu-icon">
                ◇
              </span>

              <span>
                User Details
              </span>

            </Link>


            {/* ORDERS */}

            <Link
              to="/Orders"
              className="profile-menu-item"
            >

              <span className="menu-icon">
                ◷
              </span>

              <span>
                Order History
              </span>

            </Link>


            {/* WISHLIST */}

            <Link
              to="/Wishlist"
              className="profile-menu-item"
            >

              <span className="menu-icon">
                ☆
              </span>

              <span>
                Wishlist
              </span>

            </Link>


            {/* LOGOUT */}

            <button
              className="profile-menu-item logout"
              onClick={handleLogout}
            >

              <span className="menu-icon">
                ↪
              </span>

              <span>
                Logout
              </span>

            </button>


          </div>

        </div>


        {/* =========================
            RIGHT CONTENT
        ========================= */}

        <div className="profile-content">


          {/* =========================
              PERSONAL DETAILS
          ========================= */}

          <div className="profile-section">

            <div className="section-title">

              <p>
                ACCOUNT INFORMATION
              </p>

              <h2>
                Personal Details
              </h2>

            </div>


            <div className="details-grid">


              {/* NAME */}

              <div className="detail-box">

                <div className="detail-icon">
                  ◇
                </div>

                <div>

                  <label>
                    FULL NAME
                  </label>

                  <p>
                    {user.fullname || user.name || "Not available"}
                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <div className="detail-box">

                <div className="detail-icon">
                  @
                </div>

                <div>

                  <label>
                    EMAIL ADDRESS
                  </label>

                  <p>
                    {user.email}
                  </p>

                </div>

              </div>


              {/* PHONE */}

              <div className="detail-box">

                <div className="detail-icon">
                  ☎
                </div>

                <div>

                  <label>
                    PHONE NUMBER
                  </label>

                  <p>
                    {user.phone || "Not available"}
                  </p>

                </div>

              </div>


              {/* MEMBER SINCE */}

              <div className="detail-box">

                <div className="detail-icon">
                  ◇
                </div>

                <div>

                  <label>
                    MEMBER SINCE
                  </label>

                  <p>
                    {user.memberSince || "2026"}
                  </p>

                </div>

              </div>


            </div>

          </div>


          {/* =========================
              ACCOUNT OVERVIEW
          ========================= */}

          <div className="profile-section">

            <div className="section-title">

              <p>
                YOUR JEWELLERYNEST
              </p>

              <h2>
                Account Overview
              </h2>

            </div>


            <div className="profile-stats">


              {/* ORDERS */}

              <Link
                to="/Orders"
                className="profile-stat"
              >

                <span className="stat-number">
                  {orderCount}
                </span>

                <span className="stat-label">
                  ORDERS
                </span>

              </Link>


              {/* WISHLIST */}

              <Link
                to="/Wishlist"
                className="profile-stat"
              >

                <span className="stat-number">
                  {wishlistCount}
                </span>

                <span className="stat-label">
                  WISHLIST
                </span>

              </Link>


              {/* CART */}

              <Link
                to="/Cart"
                className="profile-stat"
              >

                <span className="stat-number">
                  {cartCount}
                </span>

                <span className="stat-label">
                  CART ITEMS
                </span>

              </Link>


            </div>

          </div>


          {/* =========================
              QUICK ACCESS
          ========================= */}

          <div className="profile-section quick-section">

            <div className="section-title">

              <p>
                QUICK ACCESS
              </p>

              <h2>
                Manage Your Account
              </h2>

            </div>


            <div className="quick-actions">


              <Link to="/Orders">

                <span>
                  ORDER HISTORY
                </span>

                <b>
                  →
                </b>

              </Link>


              <Link to="/Wishlist">

                <span>
                  MY WISHLIST
                </span>

                <b>
                  →
                </b>

              </Link>


              <Link to="/Cart">

                <span>
                  SHOPPING CART
                </span>

                <b>
                  →
                </b>

              </Link>


            </div>

          </div>


        </div>

      </div>

    </div>

  )

}

export default Profile