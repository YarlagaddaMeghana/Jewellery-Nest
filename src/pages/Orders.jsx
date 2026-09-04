import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/orders.css'

const Orders = () => {

  let [orders, setOrders] = useState([])


  // ================= GET ORDERS =================

  useEffect(() => {

    let savedOrders =
      JSON.parse(localStorage.getItem("orders")) || []

    setOrders(savedOrders)

  }, [])


  // ================= EMPTY ORDERS =================

  if (orders.length === 0) {

    return (

      <div className="orders-page">

        <div className="orders-heading">

          <p>JEWELLERYNEST</p>

          <h1>My Orders</h1>

          <span>
            Your beautiful purchases, all in one place.
          </span>

        </div>


        <div className="orders-empty">

          <div className="orders-empty-icon">
            ♡
          </div>

          <h2>No Orders Yet</h2>

          <p>
            You haven't placed any orders yet.
          </p>

          <Link to="/Products">
            EXPLORE COLLECTION
          </Link>

        </div>

      </div>

    )

  }


  // ================= ORDERS PAGE =================

  return (

    <div className="orders-page">


      {/* ================= HEADING ================= */}

      <div className="orders-heading">

        <p>JEWELLERYNEST</p>

        <h1>My Orders</h1>

        <span>
          Your beautiful purchases, all in one place.
        </span>

      </div>


      {/* ================= ORDERS ================= */}

      <div className="orders-container">

        {

          orders
            .slice()
            .reverse()
            .map((order) => (

              <div
                className="order-card"
                key={order.id}
              >


                {/* ================= ORDER HEADER ================= */}

                <div className="order-header">


                  <div>

                    <p className="order-label">
                      ORDER ID
                    </p>

                    <h3>
                      #{order.id}
                    </h3>

                  </div>


                  <div>

                    <p className="order-label">
                      ORDER DATE
                    </p>

                    <h3>
                      {order.date}
                    </h3>

                  </div>


                  <div>

                    <p className="order-label">
                      STATUS
                    </p>

                    <span className="order-status">
                      {order.status}
                    </span>

                  </div>


                </div>


                {/* ================= PRODUCTS ================= */}

                <div className="order-products">

                  {

                    order.products.map((product) => (

                      <div
                        className="order-product"
                        key={product.id}
                      >


                        {/* IMAGE */}

                        <img
                          src={product.image}
                          alt={product.name}
                        />


                        {/* PRODUCT DETAILS */}

                        <div className="order-product-info">

                          <h2>
                            {product.name}
                          </h2>

                          <p>
                            {product.category}
                          </p>

                          <span>
                            Quantity: {product.quantity}
                          </span>

                        </div>


                        {/* PRICE */}

                        <div className="order-product-price">

                          ₹{(
                            Number(product.price) *
                            Number(product.quantity)
                          ).toLocaleString('en-IN')}

                        </div>


                      </div>

                    ))

                  }

                </div>


                {/* ================= DELIVERY DETAILS ================= */}

                <div className="order-delivery">

                  <p className="delivery-title">
                    DELIVERY TO
                  </p>


                  {/* NAME */}

                  <h3>
                    {order.customer?.name}
                  </h3>


                  {/* ADDRESS */}

                  <p className="delivery-address">

                    {order.address?.address}

                    <br />

                    {order.address?.city},{" "}
                    {order.address?.state} - {" "}
                    {order.address?.pincode}

                  </p>

                </div>


                {/* ================= ORDER FOOTER ================= */}

                <div className="order-footer">


                  {/* PAYMENT */}

                  <div>

                    <p>
                      PAYMENT METHOD
                    </p>

                    <strong>
                      {order.payment}
                    </strong>

                  </div>


                  {/* EMAIL */}

                  <div>

                    <p>
                      EMAIL
                    </p>

                    <strong>
                      {order.customer?.email}
                    </strong>

                  </div>


                  {/* TOTAL */}

                  <div className="order-total">

                    <p>
                      ORDER TOTAL
                    </p>

                    <strong>
                      ₹{Number(order.total).toLocaleString('en-IN')}
                    </strong>

                  </div>


                </div>


              </div>

            ))

        }

      </div>


      {/* ================= CONTINUE SHOPPING ================= */}

      <div className="orders-bottom">

        <Link to="/Products">
          ← CONTINUE SHOPPING
        </Link>

      </div>


    </div>

  )

}


export default Orders