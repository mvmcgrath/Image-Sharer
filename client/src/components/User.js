import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Image from './Image'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import imageService from '../services/image'
import userService from '../services/user'

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
  const [user, setUser] = useState(null)

  useEffect(() => {
    imageService.getAllImages().then(returnedImages => {
      setImages(returnedImages.filter(img => img.userId === parseInt(id)))
    })

    userService.getUser(id).then(returnedUser => {
      setUser(returnedUser)
    })
  }, [])

  return(
    <Container>
      {user && <StyledHeader>
        <h1>{user.username}&#39;s images</h1>
      </StyledHeader>}
      <Image images={images} />
    </Container>
  )
}

export default User