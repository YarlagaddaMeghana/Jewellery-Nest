import React, { useState } from 'react'
import "../styles/login.css"
import loginleft from '../assets/images/loginleft.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/userSlice'

const Login = () => {

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let url = `${import.meta.env.VITE_API_URL}/users`;

  let data = {
    email,
    password
  }

  console.log(data);

  const loginuser = (x) => {

    x.preventDefault();

    axios.get(url)
      .then(res => {

        let user = res.data.find((x) => {
          return x.email === email && x.password === password
        })

        if (user) {

          alert("Login successful");

          // Store logged-in user details in Redux
          dispatch(login({
            fullname: user.fullname,
            email: user.email,
            phone: user.phone
          }));

          navigate("/");

        }
        else {

          alert("Invalid email or password");

        }

      })
      .catch(err => {

        console.log(err);
        alert("Login failed");

      })

  }


  return (

    <div className='login'>

      <div className='login-leftside'>

        <img src={loginleft} alt="jewellery" />

        <div className='login-text'>

          <h3>WELCOME TO</h3>

          <h1>JewelleryNest</h1>

          <p>Timeless beauty, precious you.</p>

        </div>

      </div>


      <div className='login-rightside'>

        <h3>WELCOME BACK</h3>

        <h1>Sign In</h1>

        <p>Sign in to continue your jewellery journey.</p>


        <form action="" onSubmit={loginuser}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={x => setemail(x.target.value)}
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={x => setpassword(x.target.value)}
          />


          <div className='login-options'>

            <label>

              <input type="checkbox" />

              Remember me

            </label>

            <a href="#">Forgot Password?</a>

          </div>


          <button type="submit">

            SIGN IN →

          </button>


        </form>


        <div className='register'>

          <p>

            Don't have an account?

            <Link to='/Register'>
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>

  )
}

export default Login