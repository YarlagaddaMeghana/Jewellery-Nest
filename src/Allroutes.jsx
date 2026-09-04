import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bracelets from './pages/Bracelets'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Earrings from './pages/Earrings'
import Gifts from './pages/Gifts'
import Necklaces from './pages/Necklaces'
import Orders from './pages/Orders'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Profile from './pages/Profile'
import Rings from './pages/Rings'
import TrackOrders from './pages/TrackOrders'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import NewArrivals from './components/NewArrivals'
import Register from './pages/Register'
import MenRings from './pages/MenRings'
import MenChains from './pages/MenChains'
import MensBracelets from './pages/MensBracelets'
import TrendingPage from './pages/TrendingPage'
import FindJewellery from './components/FindJewellery'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

const Allroutes = () => {

  return (

    <div>

      <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/Bracelets' element={<Bracelets/>}/>

        <Route path='/Cart' element={<Cart/>}/>

        <Route path='/CheckOut' element={<CheckOut/>}/>

        <Route path='/Earrings' element={<Earrings/>}/>

        <Route path='/Gifts' element={<Gifts/>}/>

        <Route path='/Necklaces' element={<Necklaces/>}/>

        <Route path='/Orders' element={<Orders/>}/>

        <Route
          path='/ProductDetails/:id'
          element={<ProductDetails/>}
        />

        <Route path='/Products' element={<Products/>}/>

        <Route path='/Profile' element={<Profile/>}/>

        <Route path='/Rings' element={<Rings/>}/>

        <Route path='/TrackOrders' element={<TrackOrders/>}/>

        <Route path='/Wishlist' element={<Wishlist/>}/>

        <Route path='/Login' element={<Login/>}/>

        <Route
          path='/NewArrivals'
          element={<NewArrivals/>}
        />

        <Route path='/Register' element={<Register/>}/>

        <Route path='/MenRings' element={<MenRings/>}/>

        <Route path='/MenChains' element={<MenChains/>}/>

        <Route
          path='/MensBracelets'
          element={<MensBracelets/>}
        />
        <Route path='/TrendingPage' element={<TrendingPage/>}/>
        <Route path='/FindJewellery' element={<FindJewellery/>}/>
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AdminDashboard' element={<AdminDashboard />} />

      </Routes>

    </div>

  )

}

export default Allroutes