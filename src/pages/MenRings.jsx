import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/menrings.css'

const MenRings = () => {

  let [rings, setRings] = useState([])

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let menRings = res.data.filter((x) => {
          return x.category === "Rings" && x.gender === "Men"
        })

        setRings(menRings)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <div className="menrings-page">

      {/* HEADING */}

      <div className="menrings-heading">

        <h1>Men's Rings</h1>

        <p>
          Discover refined rings crafted with bold character,
          timeless style, and effortless sophistication.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="menrings-products">

        {
          rings.map((x) => {

            return (

              <div className="product-card" key={x.id}>

                {/* IMAGE */}

                <div className="product-image">

                  <img
                    src={x.image}
                    alt={x.name}
                  />

                </div>


                {/* DETAILS */}

                <div className="product-details">

                  <h3>{x.name}</h3>

                  <p>{x.category}</p>

                  <h4>
                    ₹{x.price.toLocaleString("en-IN")}
                  </h4>


                  {/* VIEW DETAILS */}

                  <Link to={`/ProductDetails/${x.id}`}>
                    <button>
                      VIEW DETAILS
                    </button>
                  </Link>

                </div>

              </div>

            )

          })
        }

      </div>

    </div>
  )
}

export default MenRings