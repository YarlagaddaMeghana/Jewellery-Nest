import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/newarrivals.css'

const NewArrivals = () => {

  let [products, setproducts] = useState([])


  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then(res => {
        setproducts(res.data.slice(0, 4))
      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (

    <section className="new-arrivals">

      {/* HEADING */}

      <div className="new-arrivals-heading">

        <p>JUST ARRIVED</p>

        <h1>NEW ARRIVALS</h1>

        <span>
          Discover our latest jewellery pieces, thoughtfully crafted with timeless elegance and exquisite details for every special moment.
        </span>

      </div>


      {/* PRODUCTS */}

      <div className="new-arrivals-products">

        {
          products.map((product) => (

            <div className="new-arrival-card" key={product.id}>

              {/* IMAGE */}

              <div className="new-arrival-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="new-badge">
                  NEW
                </div>

              </div>


              {/* DETAILS */}

              <div className="new-arrival-details">

                <p>{product.category}</p>

                <h2>{product.name}</h2>

                <span>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>

              </div>

            </div>

          ))
        }

      </div>


      {/* BUTTON */}

      <div className="new-arrivals-button">

        <Link to="/Products">

          <button>
            VIEW ALL PRODUCTS →
          </button>

        </Link>

      </div>

    </section>

  )
}

export default NewArrivals