import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/rings.css'

const Rings = () => {

  let [rings, setRings] = useState([])

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let womenRings = res.data.filter((x) => {
          return x.category === "Rings" && x.gender === "Women"
        })

        setRings(womenRings)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <div className="rings-page">

      <div className="rings-heading">
        <h1>Women's Rings</h1>

        <p>
          Discover elegant rings crafted to celebrate every beautiful moment.
        </p>
      </div>

      <div className="rings-products">

        {
          rings.map((x) => {

            return (
              <div className="product-card" key={x.id}>

                <div className="product-image">
                  <img src={x.image} alt={x.name} />
                </div>

                <div className="product-details">

                  <h3>{x.name}</h3>

                  <p>{x.category}</p>

                  <h4>
                    ₹{x.price.toLocaleString("en-IN")}
                  </h4>

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

export default Rings