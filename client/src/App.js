import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import About from './components/About'
import Content from './components/Content'

const App = () => {

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/buildings/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <main className='site-container'>
      <BrowserRouter>
        <About>
          <Routes>
            <Route path='/' element={<Content />} />
          </Routes>
        </About>
      </BrowserRouter>
    </main>
  )
}

export default App
