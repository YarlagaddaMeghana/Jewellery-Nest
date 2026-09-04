import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/bracelets.css'

const Bracelets = () => {

  let [bracelets, setBracelets] = useState([])

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let womenBracelets = res.data.filter((x) => {
          return x.category === "Bracelets" && x.gender === "Women"
        })

        setBracelets(womenBracelets)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <div className="bracelets-page">

      {/* HEADING */}

      <div className="bracelets-heading">

        <h1>Women's Bracelets</h1>

        <p>
          Discover graceful bracelets crafted to adorn your wrist
          with timeless elegance and effortless beauty.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="bracelets-products">

        {
          bracelets.map((x) => {

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

export default Bracelets