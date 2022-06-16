import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import About from './components/common/About'
import Nav from './components/common/Nav'
import Gallery from './pages/Gallery'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'

const App = () => {

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/buildings/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })


  return (
    <div id='flex-container'>
      <div id='container-wrap'>
        <BrowserRouter>
          <div id='sidebar'>
            <About />
          </div>
          <div id='navbar'>
            <Nav />
          </div>
          <div id='content-container'>
            <Routes>
              <Route path='/' element={<Gallery />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
