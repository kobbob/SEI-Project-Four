import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
// import { Link } from 'react-router-dom'

// Material UI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: grey[400],
    },
  },
})

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PersonIcon />
            </Avatar>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Nav
