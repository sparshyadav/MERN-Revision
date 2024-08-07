import './App.css'
import About from './components/About'
import Body from './components/Body'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}


export default App

