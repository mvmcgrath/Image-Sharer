import { Container } from 'react-bootstrap'
import logo from '../assets/logo512.png'
import { useState, useEffect } from 'react'
import Image from './Image'
//import { useParams } from 'react-router-dom'

const User = () => {
  //const id = useParams.userId()
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages([{ image: logo, title: 'Card Title', id: 1 }, { image: logo, title: 'Card Title', id: 2 }, { image: logo, title: 'Card Title', id: 3 }, { image: logo, title: 'Card Title', id: 4 }, { image: logo, title: 'Card Title', id: 5 }, { image: logo, title: 'Card Title', id: 6 }])
  }, [])

  return(
    <Container>
      <Image images={images} />
    </Container>
  )
}

export default User