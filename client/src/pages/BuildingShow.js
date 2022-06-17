import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Below we will import useParams - this is a method that returns an object of placholders as keys
import { useParams, Link, useNavigate } from 'react-router-dom'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


// // Import helpers
// import { userIsOwner, getTokenFromLocalStorage } from '../helpers/auth'

const BuildingShow = () => {

  // Navigate
  const navigate = useNavigate()

  const { id } = useParams()

  // ? State
  const [ building, setBuilding ] = useState(null)
  const [ errors, setErrors ] = useState(false)

  useEffect(() => {
    const getBuilding = async () => {
      try {
        const { data } = await axios.get(`/api/buildings/${id}`)
        setBuilding(data)
        console.log(data)
      } catch (err) {
        setErrors(true)
      }
    }
    getBuilding()
  }, [id])


  // // ? This function will execute a delete request
  // const deleteBuilding = async () => {
  //   try {
  //     // Sending delete request
  //     await axios.delete(`/api/buildings/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  

  return (
    <Container className="mt-4">
      <Row>
        { building ?
          <>
            <Col xs="12">
              <h1>{building.building_name}</h1>
              <hr />
            </Col>
            <Col md="6">
              <img src={building.image_url} alt={building.building_name} className="img-thumbnail"/>
            </Col>
            <Col md="6">
              <h4>Location</h4>
              <p>{building.building_location}</p>
              <hr />
              <h4>Date Built</h4>
              <p>{building.date_built}</p>
              <hr />
              <h4>Architect / Developer of Renovation</h4>
              <p>{building.architect}</p>
              <hr />
              <h4>Description</h4>
              <p>{building.description}</p>
              <hr />
              <h3>Source</h3>
              <p>{building.source_info}</p>
              {/* <hr /> */}
              {/* <h4><span>👋</span>Added by</h4>
              <p>{building.user.username}</p> */}
              {/* <hr /> */}
              {/* { userIsOwner(building) &&
                <div className="owner-buttons mb-4">
                  <Button variant="danger" onClick={deleteBuilding}>Delete Cheese</Button>
                  <Link className='btn btn-primary' to={`/cheeses/${building._id}/edit`}>Edit Cheese</Link>
                </div>
              } */}
              <Link to="/" className='btn btn-warning'>Back to gallery</Link>
            </Col>
          </>
          :
          <h2 className='text-center'>
            {errors ? 'Something went wrong! Please try again later!' : null }
          </h2>
        }
      </Row>
    </Container>
  )
}

export default BuildingShow