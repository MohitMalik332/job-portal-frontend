
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import Recruiter from './pages/Recruiter'
import MyApplications from './pages/MyApplications'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='jobs' element={<Jobs />}/>
        <Route path='/recruiter' element={<Recruiter />} />
        <Route path='/my-applications' element={<MyApplications />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
