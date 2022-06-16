import React from 'react'
import App from '../App'
import About from './common/About'
import Nav from './common/Nav'

function Layout(props) {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <About />
        <div>
          <Nav />
          <App />
        </div>
      </div>
    </div>
  )
}

export default Layout