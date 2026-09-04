import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import '../styles/productdetails.css'

const ProductDetails = () => {

  let { id } = useParams()

  let [product, setProduct] = useState(null)

  let [wishlistActive, setWishlistActive] = useState(false)


  // =========================
  // GET PRODUCT
  // =========================

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`)

      .then((res) => {

        setProduct(res.data)


        // CHECK IF PRODUCT IS ALREADY IN WISHLIST

        let wishlist =
          JSON.parse(localStorage.getItem("wishlist")) || []

        let exists = wishlist.some(
          (item) => String(item.id) === String(res.data.id)
        )

        setWishlistActive(exists)

      })

      .catch((err) => {

        console.log(err)

      })

  }, [id])


  // =========================
  // ADD / REMOVE WISHLIST
  // =========================

  const handleWishlist = () => {

    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || []


    let exists = wishlist.some(
      (item) => String(item.id) === String(product.id)
    )


    if (exists) {

      // REMOVE

      wishlist = wishlist.filter(
        (item) => String(item.id) !== String(product.id)
      )

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      )

      setWishlistActive(false)

      alert("Product removed from wishlist!")

    }

    else {

      // ADD

      wishlist.push(product)

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      )

      setWishlistActive(true)

      alert("Product added to wishlist!")

    }

  }


  // =========================
  // ADD TO CART
  // =========================

  const handleCart = () => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || []


    let existingProduct = cart.find(
      (item) => String(item.id) === String(product.id)
    )


    if (existingProduct) {

      // INCREASE QUANTITY

      cart = cart.map((item) => {

        if (String(item.id) === String(product.id)) {

          return {
            ...item,
            quantity: (item.quantity || 1) + 1
          }

        }

        return item

      })

    }

    else {

      // ADD NEW PRODUCT

      cart.push({

        ...product,

        quantity: 1

      })

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )


    alert("Product added to cart!")

  }


  // =========================
  // LOADING
  // =========================

  if (!product) {

    return (

      <div className="product-loading">

        <p>Loading product...</p>

      </div>

    )

  }


  // =========================
  // PAGE
  // =========================

  return (

    <div className="product-details-page">


      {/* BACK */}

      <div className="product-back">

        <Link to="/Products">

          ← BACK TO COLLECTION

        </Link>

      </div>


      {/* PRODUCT CONTAINER */}

      <div className="product-details-container">


        {/* ================= IMAGE ================= */}

        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>


        {/* ================= INFORMATION ================= */}

        <div className="product-details-info">


          {/* CATEGORY */}

          <p className="product-category">

            {product.category}

          </p>


          {/* NAME */}

          <h1>

            {product.name}

          </h1>


          <div className="product-line"></div>


          {/* DESCRIPTION */}

          <p className="product-description">

            Discover timeless elegance with this beautifully crafted
            piece from our collection. Designed with attention to
            detail, it adds a refined touch to every occasion.

          </p>


          {/* PRICE */}

          <div className="product-price">

            ₹{Number(product.price).toLocaleString("en-IN")}

          </div>


          <p className="product-tax">

            Inclusive of all taxes

          </p>


          {/* PRODUCT INFORMATION */}

          <div className="product-information">


            <div className="info-row">

              <span>Product</span>

              <span>

                {product.name}

              </span>

            </div>


            <div className="info-row">

              <span>Category</span>

              <span>

                {product.category}

              </span>

            </div>


            <div className="info-row">

              <span>Gender</span>

              <span>

                {product.gender}

              </span>

            </div>


            <div className="info-row">

              <span>Product ID</span>

              <span>

                {product.id}

              </span>

            </div>


          </div>


          {/* ================= BUTTONS ================= */}

          <div className="product-buttons">


            {/* WISHLIST */}

            <button

              className={
                wishlistActive
                  ? "wishlist-button wishlist-active"
                  : "wishlist-button"
              }

              onClick={handleWishlist}

            >

              {wishlistActive
                ? "♥ IN WISHLIST"
                : "♡ ADD TO WISHLIST"
              }

            </button>


            {/* CART */}

            <button

              className="add-cart"

              onClick={handleCart}

            >

              ADD TO CART

            </button>


            {/* BUY NOW */}

            <button

              className="buy-now"

              onClick={handleCart}

            >

              BUY NOW

            </button>


          </div>


          {/* ================= SERVICES ================= */}

          <div className="product-services">


            <div className="service-item">

              <h4>

                FREE DELIVERY

              </h4>

              <p>

                Complimentary delivery on your order

              </p>

            </div>


            <div className="service-item">

              <h4>

                AUTHENTIC JEWELLERY

              </h4>

              <p>

                Quality crafted jewellery

              </p>

            </div>


            <div className="service-item">

              <h4>

                SECURE PAYMENT

              </h4>

              <p>

                Safe and secure checkout

              </p>

            </div>


          </div>


        </div>

      </div>

    </div>

  )

}

export default ProductDetails