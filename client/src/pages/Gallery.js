import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

// Import Material UI components
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const Gallery = () => {

  const [ allBuildings, setAllBuildings ] = useState([])
  const [ errors, setErrors ] = useState(false)
  const [ loading, setLoading ] = useState(true)


  // accessing API to get all collaborations
  useEffect(() => {
    const getBuildings = async () => {
      try {
        const { data } = await axios.get('/api/buildings/')
        setAllBuildings(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
      setLoading(false)
    }
    getBuildings()
  }, [])


  return (
    <div id="gallery-container">
      <h1 className="content-title">Gallery</h1>
      {loading ?
        <span>Loading...</span>
        :
        errors ?
          <span>Gallery could not load. Please try again later!</span>
          :
          <div className="masonry-container">
            <Box sx={{ width: 800, height: 900, overflowY: 'scroll' }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {allBuildings.map(building => {
                  const { id, image_url, building_name } = building
                  console.log(building)  
                  return (
                    <Link to={`/${id}`}>
                    <ImageListItem key={id}>
                      <img
                        src={`${image_url}?w=248&fit=crop&auto=format`}
                        srcSet={`${image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={building_name}
                        loading="lazy"
                      />
                    </ImageListItem>
                    </Link>
                  )
                })}
              </ImageList>
            </Box>
          </div>
      }
    </div>
  )
}

export default Gallery 





// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//   }
// ]



