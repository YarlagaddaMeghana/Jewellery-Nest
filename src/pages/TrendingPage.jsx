import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/trendingpage.css'

const TrendingPage = () => {

  let [products, setProducts] = useState([])

  let trendingIds = [45, 36, 83, 49, 77]

  let url = `${import.meta.env.VITE_API_URL}/products`;


  useEffect(() => {

    axios.get(url)

      .then(res => {

        let trendingProducts = res.data.filter((product) =>
          trendingIds.includes(Number(product.id))
        )

        setProducts(trendingProducts)

      })

      .catch(err => {

        console.log(err)

      })

  }, [])


  return (

    <div className="trending-page">


      {/* HEADING */}

      <div className="trending-page-heading">

        <p>JEWELLERYNEST EDIT</p>

        <h1>Trending Now</h1>

        <span>
          Discover the jewellery pieces everyone is talking about.
        </span>

      </div>


      {/* PRODUCTS */}

      <div className="trending-products">

        {
          products.map((product) => (

            <div
              className="trending-card"
              key={product.id}
            >


              {/* IMAGE */}

              <div className="trending-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              {/* DETAILS */}

              <div className="trending-details">

                <p>
                  {product.category}
                </p>

                <h3>
                  {product.name}
                </h3>

                <h4>
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </h4>


                <Link
                  to={`/ProductDetails/${product.id}`}
                  className="trending-view"
                >
                  VIEW PRODUCT
                </Link>

              </div>

            </div>

          ))
        }

      </div>


      {/* BACK */}

      <div className="trending-back">

        <Link to="/Products">
          ← EXPLORE ALL PRODUCTS
        </Link>

      </div>


    </div>

  )

}

export default TrendingPage