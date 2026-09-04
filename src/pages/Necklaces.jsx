import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/necklaces.css'

const Necklaces = () => {

  let [necklaces, setNecklaces] = useState([])

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let womenNecklaces = res.data.filter((x) => {
          return x.category === "Necklaces" && x.gender === "Women"
        })

        setNecklaces(womenNecklaces)

      })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <div className="necklaces-page">

      {/* HEADING */}

      <div className="necklaces-heading">

        <h1>Women's Necklaces</h1>

        <p>
          Discover exquisite necklaces crafted to add timeless elegance
          to every beautiful moment.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="necklaces-products">

        {
          necklaces.map((x) => {

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

export default Necklaces