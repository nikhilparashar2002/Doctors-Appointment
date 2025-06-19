import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className='mx-4 sm:mx-[10%]'>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Appointment/:docId' element={<Appointment/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Doctor' element={<Doctor/>}/>
          <Route path='/Doctor/:speciality' element={<Doctor/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/My-Appointments' element={<MyAppointment/>}/>
          <Route path='/My-Profile' element={<MyProfile/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
