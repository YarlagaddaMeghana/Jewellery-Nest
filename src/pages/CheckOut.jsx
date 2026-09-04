import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/checkout.css'

const CheckOut = () => {

  let navigate = useNavigate()

  // Get logged-in user from Redux
  let user = useSelector((state) => state.user.user)


  // =========================
  // LOGIN CHECK
  // =========================

  if (!user) {

    return (

      <div className="checkout-login-page">

        <div className="checkout-login-box">

          <p>
            JEWELLERYNEST
          </p>

          <h1>
            Login Required
          </h1>

          <div className="checkout-login-line"></div>

          <p>
            Please sign in to your account
            before proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/Login")}
          >
            SIGN IN TO CONTINUE →
          </button>

          <Link to="/Products">
            CONTINUE SHOPPING
          </Link>

        </div>

      </div>

    )

  }


  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  let [orderPlaced, setOrderPlaced] = useState(false)

  let [orderId, setOrderId] = useState("")

  let [formData, setFormData] = useState({
    name: user.fullname || "",
    email: user.email || "",
    phone: user.phone || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: ""
  })


  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  // =========================
  // TOTAL
  // =========================

  let total = cart.reduce((sum, x) => {

    return sum + (
      Number(x.price) * Number(x.quantity)
    )

  }, 0)


  // =========================
  // PLACE ORDER
  // =========================

  const handlePlaceOrder = (e) => {

    e.preventDefault()


    // CHECK DETAILS

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode ||
      !formData.payment
    ) {

      alert(
        "Please fill in all the details before placing your order."
      )

      return

    }


    // =========================
    // CREATE ORDER
    // =========================

    let newOrder = {

      id: "JN" + Date.now(),

      date: new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),

      customer: {

        name: formData.name,

        email: formData.email,

        phone: formData.phone

      },

      address: {

        address: formData.address,

        city: formData.city,

        state: formData.state,

        pincode: formData.pincode

      },

      payment: formData.payment,

      products: cart,

      subtotal: total,

      delivery: 0,

      total: total,

      status: "Order Placed"

    }


    // =========================
    // GET OLD ORDERS
    // =========================

    let oldOrders =
      JSON.parse(localStorage.getItem("orders")) || []


    // =========================
    // ADD NEW ORDER
    // =========================

    oldOrders.push(newOrder)


    // =========================
    // SAVE ORDERS
    // =========================

    localStorage.setItem(
      "orders",
      JSON.stringify(oldOrders)
    )


    // =========================
    // SAVE ORDER ID
    // =========================

    setOrderId(newOrder.id)


    // =========================
    // CLEAR CART
    // =========================

    localStorage.removeItem("cart")

    setCart([])


    // =========================
    // SHOW SUCCESS
    // =========================

    setOrderPlaced(true)

  }


  // ==================================================
  // ORDER SUCCESS PAGE
  // ==================================================

  if (orderPlaced) {

    return (

      <div className="order-success">

        <div className="success-box">


          <div className="success-icon">
            ✓
          </div>


          <p className="success-small">
            ORDER CONFIRMED
          </p>


          <h1>
            Your Order Has Been Placed!
          </h1>


          <div className="success-line"></div>


          <p className="success-message">

            Thank you for trusting JewelleryNest
            with something beautiful.

          </p>


          <p className="success-caption">

            Your jewellery is now on its way to becoming
            a beautiful part of your story.

          </p>


          <p className="success-thankyou">

            Order ID: {orderId}

          </p>


          <p className="success-thankyou">

            We truly appreciate your order. ♡

          </p>


          <div className="success-buttons">


            <Link
              to="/Orders"
              className="success-button"
            >
              VIEW MY ORDERS
            </Link>


            <Link
              to="/Products"
              className="success-button"
            >
              CONTINUE SHOPPING
            </Link>


          </div>


        </div>

      </div>

    )

  }


  // ==================================================
  // EMPTY CART
  // ==================================================

  if (cart.length === 0) {

    return (

      <div className="checkout-empty">

        <h1>
          Your Cart is Empty
        </h1>

        <p>
          Add some beautiful jewellery before proceeding
          to checkout.
        </p>


        <Link to="/Products">
          EXPLORE COLLECTION
        </Link>

      </div>

    )

  }


  // ==================================================
  // CHECKOUT PAGE
  // ==================================================

  return (

    <div className="checkout-page">


      {/* ================= HEADING ================= */}

      <div className="checkout-heading">

        <p>
          JEWELLERYNEST
        </p>

        <h1>
          Checkout
        </h1>

        <span>
          Complete your details to place your order.
        </span>

      </div>


      <div className="checkout-container">


        {/* =================================================
            CHECKOUT FORM
        ================================================= */}

        <form
          className="checkout-form"
          onSubmit={handlePlaceOrder}
        >


          {/* ================= CONTACT ================= */}

          <div className="checkout-section">

            <h2>
              01. Contact Information
            </h2>


            <div className="form-grid">


              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />


              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />


              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />


            </div>

          </div>


          {/* ================= ADDRESS ================= */}

          <div className="checkout-section">

            <h2>
              02. Delivery Address
            </h2>


            <div className="form-grid">


              <input
                type="text"
                name="address"
                placeholder="House No. / Street / Area"
                value={formData.address}
                onChange={handleChange}
                className="full-input"
              />


              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />


              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />


              <input
                type="text"
                name="pincode"
                placeholder="PIN Code"
                value={formData.pincode}
                onChange={handleChange}
              />


            </div>

          </div>


          {/* ================= PAYMENT ================= */}

          <div className="checkout-section">

            <h2>
              03. Payment Method
            </h2>


            <div className="payment-options">


              <label>

                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={
                    formData.payment === "Cash on Delivery"
                  }
                  onChange={handleChange}
                />

                <span>
                  Cash on Delivery
                </span>

              </label>


              <label>

                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={
                    formData.payment === "UPI"
                  }
                  onChange={handleChange}
                />

                <span>
                  UPI
                </span>

              </label>


              <label>

                <input
                  type="radio"
                  name="payment"
                  value="Credit / Debit Card"
                  checked={
                    formData.payment === "Credit / Debit Card"
                  }
                  onChange={handleChange}
                />

                <span>
                  Credit / Debit Card
                </span>

              </label>


            </div>

          </div>


          {/* ================= PLACE ORDER ================= */}

          <button
            type="submit"
            className="place-order-button"
          >

            PLACE ORDER

          </button>


        </form>


        {/* =================================================
            ORDER SUMMARY
        ================================================= */}

        <div className="checkout-summary">


          <h2>
            ORDER SUMMARY
          </h2>


          {/* PRODUCTS */}

          {

            cart.map((x) => (

              <div
                className="checkout-product"
                key={x.id}
              >


                <img
                  src={x.image}
                  alt={x.name}
                />


                <div>

                  <h3>
                    {x.name}
                  </h3>


                  <p>
                    Qty: {x.quantity}
                  </p>


                  <span>
                    ₹{(
                      Number(x.price) *
                      Number(x.quantity)
                    ).toLocaleString("en-IN")}
                  </span>

                </div>


              </div>

            ))

          }


          {/* SUBTOTAL */}

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>

          </div>


          {/* DELIVERY */}

          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span className="free">
              FREE
            </span>

          </div>


          {/* TOTAL */}

          <div className="summary-total">

            <span>
              TOTAL
            </span>

            <span>
              ₹{total.toLocaleString("en-IN")}
            </span>

          </div>


          <p className="secure-text">

            🔒 Your information is securely protected.

          </p>


        </div>


      </div>

    </div>

  )

}


export default CheckOut