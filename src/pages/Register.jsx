import React, { useState } from 'react'

import registerleft from '../assets/images/registerleft.png'

import '../styles/register.css'

import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Register = () => {

  let [fullname, setfullname] = useState("")

  let [email, setemail] = useState("")

  let [phone, setphone] = useState("")

  let [password, setpassword] = useState("")

  let [confirmpassword, setconfirmpassword] = useState("")

  let [terms, setterms] = useState(false)

  let navigate = useNavigate()

  let url = `${import.meta.env.VITE_API_URL}/users`;

  let data = {

    fullname,

    email,

    phone,

    password

  }


  const registeruser = (x) => {

    x.preventDefault()


    // Regular expressions

    let nameregex = /^[A-Za-z ]+$/

    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let phoneregex = /^[0-9]{10}$/

    let passwordregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


    // Full name validation

    if (!nameregex.test(fullname)) {

      alert("Please enter a valid full name")

      return

    }


    // Email validation

    if (!emailregex.test(email)) {

      alert("Please enter a valid email address")

      return

    }


    // Phone validation

    if (!phoneregex.test(phone)) {

      alert("Phone number must contain exactly 10 digits")

      return

    }


    // Password validation

    if (!passwordregex.test(password)) {

      alert(
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
      )

      return

    }


    // Confirm password

    if (password !== confirmpassword) {

      alert("Passwords do not match")

      return

    }


    // Terms validation

    if (!terms) {

      alert("Please accept the Terms & Conditions")

      return

    }


    // Register user

    axios.post(url, data)

      .then(res => {

        alert("Registration successful")


        setfullname("")

        setemail("")

        setphone("")

        setpassword("")

        setconfirmpassword("")

        setterms(false)


        navigate("/Login")

      })

      .catch(err => {

        console.log(err)

        alert("Registration failed")

      })

  }


  return (

    <div className='register-page'>


      {/* register left */}

      <div className='register-leftside'>

        <img
          src={registerleft}
          alt="jewellery image"
        />

        <div className='register-text'>

          <h1>JewelleryNest</h1>

          <p>
            Where every piece tells a story.
          </p>

        </div>

      </div>


      {/* register right */}

      <div className='register-rightside'>

        <form action="" onSubmit={registeruser}>


          <label>

            <h4>Full Name</h4>

          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />


          <label>

            <h4>Email Address</h4>

          </label>

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />


          <label>

            <h4>Phone Number</h4>

          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />


          <label>

            <h4>Password</h4>

          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />


          <label>

            <h4>Confirm Password</h4>

          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmpassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
          />


          <div className='terms'>

            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setterms(e.target.checked)}
            />

            <p>
              I agree to the Terms & Conditions and Privacy Policy
            </p>

          </div>


          <button type="submit">

            CREATE ACCOUNT

          </button>


        </form>


        <div className='login-link'>

          <p>

            Already have an account?

            <Link to='/Login'>
              Sign In
            </Link>

          </p>

        </div>

      </div>

    </div>

  )

}

export default Register