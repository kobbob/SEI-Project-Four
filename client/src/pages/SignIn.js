import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'


import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Material UI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#757ce8',
    },
    secondary: {
      main: '#3f50b5',
    },
  },
})

const SignIn = () => {

  // Navigate
  const navigate = useNavigate()

  // ? State
  // Form data passed by user
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  // ? Save to local storage
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('architecture-waste-age', token)
  }

  // Submit request
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      navigate('/profile')
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
    // const data = new FormData(event.currentTarget)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })
  }

  //  Handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField value={formData.email} onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField value={formData.password} onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Link href="/profile" color="inherit">
                Sign In
              </Link>
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'No account? Click here to sign up'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default SignIn