import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/menbracelets.css';

const MenBracelets = () => {

  let [bracelets, setBracelets] = useState([]);

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let menBracelets = res.data.filter((x) =>
          x.gender === "Men" && x.category === "Bracelets"
        );

        setBracelets(menBracelets);

      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <div className="men-bracelets-page">

      {/* HEADING */}

      <div className="men-bracelets-heading">

        <h1>Men's Bracelets</h1>

        <p>
          Discover timeless bracelets crafted for the modern man,
          blending refined design with effortless elegance.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="men-bracelets-products">

        {
          bracelets.map((x) => (

            <div className="men-bracelet-card" key={x.id}>

              {/* IMAGE */}

              <div className="men-bracelet-image">

                <img
                  src={x.image}
                  alt={x.name}
                />

              </div>


              {/* DETAILS */}

              <div className="men-bracelet-details">

                <h3>{x.name}</h3>

                <p>{x.category}</p>

                <h4>
                  ₹{x.price.toLocaleString('en-IN')}
                </h4>


                {/* VIEW PRODUCT */}

                <Link to={`/ProductDetails/${x.id}`}>
                  <button>
                    VIEW PRODUCT
                  </button>
                </Link>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
};

export default MenBracelets;