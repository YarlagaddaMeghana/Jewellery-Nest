import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/adminLogin.css'

const AdminLogin = () => {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true")
      alert("Admin login successful")
      navigate("/AdminDashboard")
    } else {
      alert("Invalid admin email or password")
    }
  }

  return (
    <div className="admin-login-page">

      <div className="admin-login-box">

        <p className="admin-brand">JEWELLERYNEST</p>

        <h1>Admin Login</h1>

        <p className="admin-login-subtitle">
          Login to manage your jewellery store
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            LOGIN AS ADMIN
          </button>

        </form>

      </div>

    </div>
  )
}

export default AdminLogin