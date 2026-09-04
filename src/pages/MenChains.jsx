import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/menchains.css';

const MenChains = () => {

  let [chains, setChains] = useState([]);

  let url = `${import.meta.env.VITE_API_URL}/products`;

  useEffect(() => {

    axios.get(url)
      .then(res => {

        let menChains = res.data.filter((x) =>
          x.gender === "Men" && x.category === "Chains"
        );

        setChains(menChains);

      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <div className="men-chains-page">

      {/* HEADING */}

      <div className="men-chains-heading">

        <h1>Men's Chains</h1>

        <p>
          Discover refined chains crafted for timeless style,
          strength and effortless elegance.
        </p>

      </div>


      {/* PRODUCTS */}

      <div className="men-chains-products">

        {
          chains.map((x) => (

            <div className="men-chain-card" key={x.id}>

              {/* IMAGE */}

              <div className="men-chain-image">

                <img
                  src={x.image}
                  alt={x.name}
                />

              </div>


              {/* DETAILS */}

              <div className="men-chain-details">

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

export default MenChains;