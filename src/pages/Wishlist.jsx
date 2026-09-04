import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/wishlist.css'

const Wishlist = () => {

  let [wishlist, setWishlist] = useState([])


  // =========================
  // GET WISHLIST FROM LOCALSTORAGE
  // =========================

  useEffect(() => {

    let savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || []

    setWishlist(savedWishlist)

  }, [])


  // =========================
  // REMOVE FROM WISHLIST
  // =========================

  const removeFromWishlist = (id) => {

    let newWishlist = wishlist.filter(
      (x) => String(x.id) !== String(id)
    )

    setWishlist(newWishlist)

    localStorage.setItem(
      "wishlist",
      JSON.stringify(newWishlist)
    )

  }


  return (

    <div className="wishlist-page">


      {/* ================= HEADING ================= */}

      <div className="wishlist-heading">

        <h1>
          My Wishlist
        </h1>

        <p>
          Your collection of jewellery saved for later.
        </p>

      </div>


      {/* ================= EMPTY WISHLIST ================= */}

      {
        wishlist.length === 0 ? (

          <div className="wishlist-empty">

            <div className="wishlist-empty-icon">
              ♡
            </div>

            <h2>
              Your Wishlist is Empty
            </h2>

            <p>
              Save your favourite jewellery pieces here
              and come back to them anytime.
            </p>

            <Link to="/Products">
              EXPLORE COLLECTION
            </Link>

          </div>

        ) : (


          /* ================= WISHLIST PRODUCTS ================= */

          <div className="wishlist-products">

            {
              wishlist.map((x) => (

                <div
                  className="wishlist-card"
                  key={x.id}
                >


                  {/* IMAGE */}

                  <div className="wishlist-image">

                    <img
                      src={x.image}
                      alt={x.name}
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="wishlist-details">


                    <p className="wishlist-category">

                      {x.category}

                    </p>


                    <h3>

                      {x.name}

                    </h3>


                    <h4>

                      ₹{Number(x.price).toLocaleString('en-IN')}

                    </h4>


                    {/* BUTTONS */}

                    <div className="wishlist-buttons">


                      {/* VIEW DETAILS */}

                      <Link
                        to={`/ProductDetails/${x.id}`}
                        className="wishlist-view"
                      >

                        VIEW DETAILS

                      </Link>


                      {/* REMOVE */}

                      <button
                        onClick={() =>
                          removeFromWishlist(x.id)
                        }
                        className="wishlist-remove"
                      >

                        REMOVE

                      </button>


                    </div>


                  </div>


                </div>

              ))

            }

          </div>

        )

      }


    </div>

  )

}


export default Wishlist