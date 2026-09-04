import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/earrings.css'

const Earrings = () => {

  let [earrings, setEarrings] = useState([])

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let womenEarrings = res.data.filter((x) => {
          return x.category === "Earrings" && x.gender === "Women"
        })

        setEarrings(womenEarrings)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <div className="earrings-page">

      {/* HEADING */}

      <div className="earrings-heading">

        <h1>Women's Earrings</h1>

        <p>
          Discover exquisite earrings designed to add a touch of
          elegance and sparkle to every beautiful occasion.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="earrings-products">

        {
          earrings.map((x) => {

            return (

              <div className="product-card" key={x.id}>

                <div className="product-image">

                  <img
                    src={x.image}
                    alt={x.name}
                  />

                </div>


                <div className="product-details">

                  <h3>{x.name}</h3>

                  <p>{x.category}</p>

                  <h4>
                    ₹{x.price.toLocaleString("en-IN")}
                  </h4>


                  {/* VIEW DETAILS */}

                  <Link
                    to={`/ProductDetails/${x.id}`}
                    className="view-details"
                  >
                    VIEW DETAILS
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

export default Earrings