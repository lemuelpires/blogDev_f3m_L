import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Register from './pages/Register/register'
import Login from './pages/Login/login'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
