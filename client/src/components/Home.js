import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Image from './Image'
import imageService from '../services/image'

const Home = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    imageService.getAllImages().then(returnedImages => {
      setImages(returnedImages)
    })
  }, [])

  return(
    <Container>
      <Image images={images} />
    </Container>
  )
}

export default Home