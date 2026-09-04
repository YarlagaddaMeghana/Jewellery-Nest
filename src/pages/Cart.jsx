import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/cart.css'

const Cart = () => {

  let navigate = useNavigate()

  // Get logged-in user from Redux
  let user = useSelector((state) => state.user.user)

  let [cart, setCart] = useState([])


  // =========================
  // GET CART FROM LOCALSTORAGE
  // =========================

  useEffect(() => {

    let savedCart =
      JSON.parse(localStorage.getItem("cart")) || []

    setCart(savedCart)

  }, [])


  // =========================
  // SAVE CART
  // =========================

  const updateCart = (newCart) => {

    setCart(newCart)

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    )

  }


  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart = (id) => {

    let newCart = cart.filter(
      (x) => String(x.id) !== String(id)
    )

    updateCart(newCart)

  }


  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {

    let newCart = cart.map((x) => {

      if (String(x.id) === String(id)) {

        return {
          ...x,
          quantity: (x.quantity || 1) + 1
        }

      }

      return x

    })

    updateCart(newCart)

  }


  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {

    let newCart = cart.map((x) => {

      if (
        String(x.id) === String(id) &&
        (x.quantity || 1) > 1
      ) {

        return {
          ...x,
          quantity: x.quantity - 1
        }

      }

      return x

    })

    updateCart(newCart)

  }


  // =========================
  // TOTAL PRICE
  // =========================

  let total = cart.reduce((sum, x) => {

    return sum + (
      Number(x.price) * (x.quantity || 1)
    )

  }, 0)


  // =========================
  // TOTAL ITEMS
  // =========================

  let totalItems = cart.reduce((sum, x) => {

    return sum + (x.quantity || 1)

  }, 0)


  // =========================
  // PROCEED TO CHECKOUT
  // =========================

  const handleCheckout = () => {

    if (!user) {

      alert("Please login to proceed to checkout.")

      navigate("/Login")

      return

    }

    navigate("/CheckOut")

  }


  return (

    <div className="cart-page">


      {/* ================= HEADING ================= */}

      <div className="cart-heading">

        <h1>
          Shopping Cart
        </h1>

        <p>
          Review your selected jewellery before checkout.
        </p>

      </div>


      {/* ================= EMPTY CART ================= */}

      {
        cart.length === 0 ? (

          <div className="cart-empty">

            <div className="cart-empty-icon">
              🛒
            </div>

            <h2>
              Your Cart is Empty
            </h2>

            <p>
              Looks like you haven't added any jewellery yet.
            </p>

            <Link to="/Products">
              EXPLORE COLLECTION
            </Link>

          </div>

        ) : (


          /* ================= CART CONTENT ================= */

          <div className="cart-container">


            {/* ================= PRODUCTS ================= */}

            <div className="cart-products">

              {
                cart.map((x) => (

                  <div
                    className="cart-item"
                    key={x.id}
                  >


                    {/* IMAGE */}

                    <div className="cart-item-image">

                      <img
                        src={x.image}
                        alt={x.name}
                      />

                    </div>


                    {/* DETAILS */}

                    <div className="cart-item-details">

                      <p className="cart-item-category">

                        {x.category}

                      </p>


                      <h2>

                        {x.name}

                      </h2>


                      <p className="cart-item-gender">

                        {x.gender}

                      </p>


                      <h3>

                        ₹{Number(x.price).toLocaleString('en-IN')}

                      </h3>


                      {/* QUANTITY */}

                      <div className="quantity-section">

                        <span>
                          QUANTITY
                        </span>


                        <div className="quantity-control">


                          <button
                            onClick={() =>
                              decreaseQuantity(x.id)
                            }
                          >
                            −
                          </button>


                          <span>

                            {x.quantity || 1}

                          </span>


                          <button
                            onClick={() =>
                              increaseQuantity(x.id)
                            }
                          >
                            +
                          </button>


                        </div>

                      </div>


                      {/* REMOVE */}

                      <button

                        className="cart-remove"

                        onClick={() =>
                          removeFromCart(x.id)
                        }

                      >

                        REMOVE FROM CART

                      </button>


                    </div>


                    {/* ITEM TOTAL */}

                    <div className="cart-item-total">

                      <p>
                        ITEM TOTAL
                      </p>

                      <h3>

                        ₹{(
                          Number(x.price) *
                          (x.quantity || 1)
                        ).toLocaleString('en-IN')}

                      </h3>

                    </div>


                  </div>

                ))

              }

            </div>


            {/* ================= SUMMARY ================= */}

            <div className="cart-summary">

              <h2>
                ORDER SUMMARY
              </h2>


              <div className="summary-line">

                <span>
                  Items
                </span>

                <span>
                  {totalItems}
                </span>

              </div>


              <div className="summary-line">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{total.toLocaleString('en-IN')}
                </span>

              </div>


              <div className="summary-line">

                <span>
                  Delivery
                </span>

                <span className="free">
                  FREE
                </span>

              </div>


              <div className="summary-line summary-total">

                <span>
                  TOTAL
                </span>

                <span>
                  ₹{total.toLocaleString('en-IN')}
                </span>

              </div>


              {/* CHECKOUT */}

              <button
                className="checkout-button"
                onClick={handleCheckout}
              >

                PROCEED TO CHECKOUT

              </button>


              {/* CONTINUE SHOPPING */}

              <Link
                to="/Products"
                className="continue-shopping"
              >

                ← CONTINUE SHOPPING

              </Link>


            </div>


          </div>

        )

      }

    </div>

  )

}


export default Cart