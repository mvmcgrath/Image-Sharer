import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Image from './Image'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import imageService from '../services/image'

const StyledHeader = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin: 15px 0px;
  background-color: #212529;
`

const User = () => {
  const id = useParams().userId
  const [images, setImages] = useState([])

  useEffect(() => {
    imageService.getAllImages().then(returnedImages => {
      setImages(returnedImages.filter(img => img.userId === id))
    })
  }, [])

  return(
    <Container>
      <StyledHeader>
        <h1>Users Images</h1>
      </StyledHeader>
      <Image images={images} />
    </Container>
  )
}

export default User