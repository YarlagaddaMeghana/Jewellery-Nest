import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/trending.css'

const Trending = () => {

  return (

    <section className="trending-section">

      <div className="trending-overlay">

        <div className="trending-content">

          <p className="trending-small">
            WHAT'S IN STYLE
          </p>

          <h2>
            Trending Now
          </h2>

          <p className="trending-description">
            Discover the jewellery pieces everyone is loving right now.
          </p>

          <Link
            to="/TrendingPage"
            className="trending-button"
          >
            VIEW TRENDING →
          </Link>

        </div>

      </div>

    </section>

  )
}

export default Trending