import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'


import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Import helpers
import { getTokenFromLocalStorage } from '../components/helpers/auth'

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

const Profile = () => {

  // Navigate
  const navigate = useNavigate()

  // ? State
  // Form data passed by user
  const [formData, setFormData] = useState({
    building_name: '',
    building_location: '',
    date_built: '',
    architect: '',
    description: '',
    image_caption: '',
    image_source: '',
    image_url: '',
    source_info: '',
    source_url: '',
  })

  // State that tracks errors on specific fields
  const [errors, setErrors] = useState({})

  // ? Update formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Third argument of post request is config object
      // To add our token auth, we add a headers object inside the config object with an Authorization key
      // Authorization key has a Bearer token as a value, just as in insomnia
      const { data } = await axios.post('/api/buildings', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/gallery')
    } catch (err) {
      console.log(err)
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }


  return (
    <div id="profile-container">
      <div id="profile-heading">
        <h1>Profile</h1>
        <h3>Do you want to add your own entry? Fill out the form below and see the results on the Gallery page.</h3>
      </div>

      <div id="form-container">
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
              <Typography component="h1" variant="h5">
                Create your own entry
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <TextField value={formData.building_name} onChange={handleChange}
                      autoComplete="building_name"
                      name="building_name"
                      required
                      fullWidth
                      id="building_name"
                      label="Building Name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.building_location} onChange={handleChange}
                      autoComplete="building_location"
                      name="building_location"
                      required
                      fullWidth
                      id="building_location"
                      label="Building Location"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.date_built} onChange={handleChange}
                      required
                      fullWidth
                      id="date_built"
                      type="number"
                      label="Date Built"
                      name="date_built"
                      autoComplete="date_built"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.architect} onChange={handleChange}
                      autoComplete="architect"
                      name="architect"
                      required
                      fullWidth
                      id="architect"
                      label="Architect/Developer of Renovation"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.description} onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      rows={9}
                      id="description"
                      label="Description"
                      name="description"
                      autoComplete="description"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.image_caption} onChange={handleChange}
                      autoComplete="image_caption"
                      name="image_caption"
                      required
                      fullWidth
                      id="image_caption"
                      label="Image Caption"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.image_source} onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      id="image_source"
                      label="Image Source (i.e. website name"
                      name="image_source"
                      autoComplete="image_source"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.image_url} onChange={handleChange}
                      autoComplete="image_url"
                      name="image_url"
                      required
                      fullWidth
                      id="image_url"
                      label="Image URL"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.source_info} onChange={handleChange}
                      required
                      fullWidth
                      multiline
                      id="source_info"
                      label="Source Info"
                      name="source_info"
                      autoComplete="source_info"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField value={formData.source_url} onChange={handleChange}
                      autoComplete="source_url"
                      name="source_url"
                      required
                      fullWidth
                      id="source_url"
                      label="Source URL"
                      autoFocus
                    />
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                  
                  <Grid container justifyContent="center">
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div >
  )

}

export default Profile


