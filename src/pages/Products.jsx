import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/products.css'

const Products = () => {

  let [products, setproducts] = useState([])

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)

      .then(res => {

        setproducts(res.data)

      })

      .catch(err => {

        console.log(err)

      })

  }, [])

  return (

    <div className="products-page">

      <h1>
        Our Jewellery Collection
      </h1>

      <p className="collection-caption">
        Timeless pieces, crafted to make every moment unforgettable.
      </p>

      <div className="products-container">

        {
          products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <Link
                  to={`/ProductDetails/${product.id}`}
                  className="view-product"
                ><button>
                  VIEW PRODUCT</button>
                </Link>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )

}

export default Products