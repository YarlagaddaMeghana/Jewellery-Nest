import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/adminDashboard.css'

const AdminDashboard = () => {

  let [products, setProducts] = useState([])
  let [users, setUsers] = useState([])
  let [orders, setOrders] = useState([])

  let navigate = useNavigate()

  useEffect(() => {

    let admin = localStorage.getItem("adminLoggedIn")

    if (admin !== "true") {
      navigate("/AdminLogin")
      return
    }

    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`${import.meta.env.VITE_API_URL}/users`)
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    let savedOrders =
      JSON.parse(localStorage.getItem("orders")) || []

    setOrders(savedOrders)

  }, [navigate])

  const deleteProduct = (id) => {

    let confirmDelete =
      window.confirm("Are you sure you want to delete this product?")

    if (!confirmDelete) {
      return
    }

    axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(() => {

        setProducts(
          products.filter((product) => product.id !== id)
        )

        alert("Product deleted successfully")

      })
      .catch((err) => {
        console.log(err)
        alert("Unable to delete product")
      })
  }

  const logoutAdmin = () => {

    localStorage.removeItem("adminLoggedIn")

    alert("Admin logged out")

    navigate("/AdminLogin")
  }

  return (
    <div className="admin-dashboard-page">

      {/* HEADER */}

      <div className="admin-header">

        <div>
          <p>JEWELLERYNEST</p>
          <h1>Admin Dashboard</h1>
        </div>

        <button onClick={logoutAdmin}>
          LOGOUT
        </button>

      </div>


      {/* STATISTICS */}

      <div className="admin-stats">

        <div className="admin-stat-card">
          <p>TOTAL PRODUCTS</p>
          <h2>{products.length}</h2>
        </div>

        <div className="admin-stat-card">
          <p>TOTAL USERS</p>
          <h2>{users.length}</h2>
        </div>

        <div className="admin-stat-card">
          <p>TOTAL ORDERS</p>
          <h2>{orders.length}</h2>
        </div>

      </div>


      {/* PRODUCTS */}

      <div className="admin-section">

        <div className="admin-section-heading">
          <h2>Manage Products</h2>
          <span>{products.length} Products</span>
        </div>

        <div className="admin-table-container">

          <table>

            <thead>
              <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>GENDER</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => (

                <tr key={product.id}>

                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="admin-product-image"
                    />
                  </td>

                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>{product.gender}</td>

                  <td>
                    ₹{Number(product.price).toLocaleString('en-IN')}
                  </td>

                  <td>

                    <button
                      className="delete-product"
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                    >
                      DELETE
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* USERS */}

      <div className="admin-section">

        <div className="admin-section-heading">
          <h2>Registered Users</h2>
          <span>{users.length} Users</span>
        </div>

        <div className="admin-table-container">

          <table>

            <thead>

              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>
                    {user.fullname || user.name}
                  </td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* ORDERS */}

      <div className="admin-section">

        <div className="admin-section-heading">
          <h2>Customer Orders</h2>
          <span>{orders.length} Orders</span>
        </div>

        <div className="admin-table-container">

          <table>

            <thead>

              <tr>
                <th>ORDER ID</th>
                <th>CUSTOMER</th>
                <th>DATE</th>
                <th>PAYMENT</th>
                <th>TOTAL</th>
                <th>STATUS</th>
              </tr>

            </thead>

            <tbody>

              {orders.length > 0 ? (

                orders.slice().reverse().map((order) => (

                  <tr key={order.id}>

                    <td>{order.id}</td>

                    <td>
                      {order.customer?.name}
                    </td>

                    <td>{order.date}</td>

                    <td>{order.payment}</td>

                    <td>
                      ₹{Number(order.total).toLocaleString('en-IN')}
                    </td>

                    <td>
                      <span className="order-status">
                        {order.status}
                      </span>
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="6">
                    No orders found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard