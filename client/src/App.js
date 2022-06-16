
// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import About from './components/common/About'
import Nav from './components/common/Nav'
import Gallery from './pages/Gallery'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

const App = () => {


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
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
