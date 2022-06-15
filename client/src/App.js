import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import About from './components/sidebar/About'
import Content from './components/masonry/Content'

const App = () => {

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/buildings/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })


  return (
    <div id='site-container'>
      <div id='container-wrap'>
        <BrowserRouter>
          <About>
            <Routes>
              <Route path='/' element={<Content />} />
            </Routes>
          </About>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
