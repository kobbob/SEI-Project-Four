

const Gallery = () => {

  return (
    <>
      <div id="gallery-container">
        <h1 className="content-title">Gallery</h1>
      </div>
    </>

  )

}

export default Gallery



// contents are ordered by row. 
// Masonry - a container for one or more items. 
// columns accepts responseive values 

// <Masonry columns={4} spacing={3}>
//   {heights.map((height, index) =>(
//     <Item key={index} sx={{ height }}>
//       {index + 1}
//     </Item>
//   ))}
// </Masonry>