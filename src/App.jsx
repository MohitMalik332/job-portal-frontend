
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import RecruiterDashboard from './pages/RecruiterDashboard'
import MyApplications from './pages/MyApplications'
import Navbar from './components/Navbar'
import PostJob from './pages/PostJob'
import RecruiterJobs from './pages/RecruiterJobs'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='jobs' element={<Jobs />}/>
        <Route path='/recruiter' element={<RecruiterDashboard />} />
        <Route path='/my-applications' element={<MyApplications />} />
        <Route path='post-job' element={<PostJob />} />
        <Route path='/recruiter/jobs' element={<RecruiterJobs />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
