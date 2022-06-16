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
import { green, purple } from '@mui/material/colors'

import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Material UI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})


const SignUp = () => {

  // Navigate
  const navigate = useNavigate()

  // State - form data passed by user
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  // State that tracks errors
  const [errors, setErrors] = useState({})

  // Update formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }


  // Submit info from fields to our /register/ endpoint 
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log(formData)
      await axios.post('/api/auth/register/', formData)
      navigate('/profile')
    } catch (err) {
      console.log(err) // Full error object
      console.log(err.response) // This is the response from the API including status etc
      console.log(err.response.data.errors) // This is the errors object on the data key
      setErrors(err.response.data.errors)
    }
    // const data = new FormData(event.currentTarget)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // })
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField value={formData.first_name} onChange={handleChange}
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField value={formData.last_name} onChange={handleChange}
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={formData.username} onChange={handleChange}
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="fusername"
                  label="Username"
                  autoFocus
                />
                {/* {errors.username && <p>{errors.username}</p>} */}
              </Grid>
              <Grid item xs={12}>
                <TextField value={formData.email} onChange={handleChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={formData.password} onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={formData.password_confirmation} onChange={handleChange}
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Password Confirmation"
                  type="password"
                  id="password_confirmation"
                  autoComplete="new_password_confirmation"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default SignUp