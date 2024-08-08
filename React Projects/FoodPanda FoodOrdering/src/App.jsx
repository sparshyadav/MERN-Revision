import './App.css'
import About from './components/About'
import Body from './components/Body'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestrauntMenu from './components/RestrauntMenu'
import React, {lazy, Suspense} from 'react'
import { Shimmer } from 'react-shimmer'

const Grocery=lazy(()=>import("./components/Grocery"));

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/grocery' element={<Suspense fallback={<Shimmer />}><Grocery /></Suspense>} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/restraunt/:resId' element={<RestrauntMenu />} />
      </Routes>
    </Router>
  )
}

export default App

