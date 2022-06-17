import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


// Import helpers
import { userIsAuthenticated } from '../helpers/auth'

const Nav = () => {
  console.log(userIsAuthenticated())

  // Navigate
  const navigate = useNavigate()

  // ? This function removes the token and navigates to the login page
  const handleLogout = () => {
    // Remove the token from local storage
    window.localStorage.removeItem('architecture-waste-age')
    // Navigate to the gallery page
    navigate('/')
  }

  return (
    <div className="nav-bar">
      <ul className="nav-container">
        <li className="nav-list"><Link to='/'>Gallery</Link></li>
        {userIsAuthenticated() ?
          <>
            <li className="nav-list"><Link to='/profile'>Profile</Link></li>
            <li className="nav-list"><button onClick={handleLogout}>Sign Out</button></li>
          </>
          :
          <>
            <li className="nav-list"><Link to='/signin'>Sign In</Link></li>
          </>
        }
      </ul>
    </div>
  )
}

export default Nav


