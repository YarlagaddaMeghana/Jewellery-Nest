import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/findJewellery.css'

const FindJewellery = () => {

  let [products, setProducts] = useState([])

  let [occasion, setOccasion] = useState("")
  let [category, setCategory] = useState("")
  let [style, setStyle] = useState("")
  let [budget, setBudget] = useState("")
  let [gender, setGender] = useState("")

  let [results, setResults] = useState([])
  let [submitted, setSubmitted] = useState(false)


  /* ==============================
     GET PRODUCTS
  ============================== */

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  /* ==============================
     FIND JEWELLERY
  ============================== */

  const findJewellery = (e) => {

    e.preventDefault()

    if (!occasion || !category || !style || !budget || !gender) {
      alert("Please select all options.")
      return
    }


    /* ==============================
       BUDGET
    ============================== */

    let minPrice = 0
    let maxPrice = Infinity

    if (budget === "30000-50000") {
      minPrice = 30000
      maxPrice = 50000
    }

    if (budget === "50000-70000") {
      minPrice = 50000
      maxPrice = 70000
    }

    if (budget === "70000-90000") {
      minPrice = 70000
      maxPrice = 90000
    }

    if (budget === "90000+") {
      minPrice = 90000
      maxPrice = Infinity
    }


    /* ==============================
       MATCH ALL 5 OPTIONS
    ============================== */

    let matchedProducts = products.filter((product) => {

      return (
        product.occasion?.toLowerCase() === occasion.toLowerCase() &&
        product.category?.toLowerCase() === category.toLowerCase() &&
        product.style?.toLowerCase() === style.toLowerCase() &&
        product.gender?.toLowerCase() === gender.toLowerCase() &&
        Number(product.price) >= minPrice &&
        Number(product.price) <= maxPrice
      )

    })


    setResults(matchedProducts)
    setSubmitted(true)

  }


  /* ==============================
     RESET
  ============================== */

  const resetSearch = () => {

    setOccasion("")
    setCategory("")
    setStyle("")
    setBudget("")
    setGender("")

    setResults([])

    setSubmitted(false)

  }


  return (

    <div className="find-jewellery-page">


      {/* ==============================
         HEADING
      ============================== */}

      <div className="find-heading">

        <p>JEWELLERYNEST</p>

        <h1>Find Your Jewellery Match</h1>

        <span>
          Tell us what you're looking for and we'll find
          jewellery that matches your style.
        </span>

      </div>


      {/* ==============================
         QUESTIONS
      ============================== */}

      <form
        className="find-form"
        onSubmit={findJewellery}
      >


        {/* ==============================
           OCCASION
        ============================== */}

        <div className="question-box">

          <label>
            01. What is the occasion?
          </label>

          <select
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >

            <option value="">
              Select Occasion
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Party">
              Party
            </option>

            <option value="Office">
              Office
            </option>

            <option value="Casual">
              Casual
            </option>

            <option value="Gift">
              Gift
            </option>

          </select>

        </div>


        {/* ==============================
           CATEGORY
        ============================== */}

        <div className="question-box">

          <label>
            02. What jewellery are you looking for?
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >

            <option value="">
              Select Category
            </option>

            <option value="Rings">
              Rings
            </option>

            <option value="Necklaces">
              Necklaces
            </option>

            <option value="Earrings">
              Earrings
            </option>

            <option value="Bracelets">
              Bracelets
            </option>

            <option value="Chains">
              Chains
            </option>

          </select>

        </div>


        {/* ==============================
           STYLE
        ============================== */}

        <div className="question-box">

          <label>
            03. What look do you prefer?
          </label>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >

            <option value="">
              Select Look
            </option>

            <option value="Minimal">
              Minimal
            </option>

            <option value="Classic">
              Classic
            </option>

            <option value="Traditional">
              Traditional
            </option>

            <option value="Modern">
              Modern
            </option>

            <option value="Elegant">
              Elegant
            </option>

          </select>

        </div>


        {/* ==============================
           BUDGET
        ============================== */}

        <div className="question-box">

          <label>
            04. What is your budget?
          </label>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >

            <option value="">
              Select Budget
            </option>

            <option value="30000-50000">
              ₹30,000 - ₹50,000
            </option>

            <option value="50000-70000">
              ₹50,000 - ₹70,000
            </option>

            <option value="70000-90000">
              ₹70,000 - ₹90,000
            </option>

            <option value="90000+">
              Above ₹90,000
            </option>

          </select>

        </div>


        {/* ==============================
           GENDER
        ============================== */}

        <div className="question-box">

          <label>
            05. Who are you shopping for?
          </label>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >

            <option value="">
              Select Gender
            </option>

            <option value="Women">
              Women
            </option>

            <option value="Men">
              Men
            </option>

          </select>

        </div>


        {/* ==============================
           BUTTON
        ============================== */}

        <button
          type="submit"
          className="find-button"
        >
          FIND MY JEWELLERY
        </button>

      </form>


      {/* ==============================
         RESULTS
      ============================== */}

      {submitted && (

        <div className="match-results">


          {/* RESULTS HEADING */}

          <div className="results-heading">

            <h2>
              Your Jewellery Matches
            </h2>

            <p>
              {results.length > 0
                ? `${results.length} jewellery pieces found for you`
                : "No exact matches found for your choices."
              }
            </p>

          </div>


          {/* ==============================
             MATCHED PRODUCTS
          ============================== */}

          {results.length > 0 ? (

            <div className="result-grid">

              {results.map((product) => (

                <div
                  className="result-card"
                  key={product.id}
                >


                  {/* IMAGE */}

                  <div className="result-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>


                  {/* DETAILS */}

                  <div className="result-details">

                    <p>
                      {product.category}
                    </p>

                    <h3>
                      {product.name}
                    </h3>

                    <span>
                      {product.style}
                    </span>

                    <h4>
                      ₹{Number(product.price).toLocaleString('en-IN')}
                    </h4>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* ==============================
               NO RESULTS
            ============================== */

            <div className="no-results">

              <h3>
                No Jewellery Found
              </h3>

              <p>
                No jewellery matches all your preferences.
                Try changing your selections.
              </p>

              <button
                type="button"
                onClick={resetSearch}
              >
                TRY AGAIN
              </button>

            </div>

          )}

        </div>

      )}

    </div>

  )

}

export default FindJewellery