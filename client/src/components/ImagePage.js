import { Container, Image, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import imageService from '../services/image'
import { useParams, useNavigate } from 'react-router-dom'

const StyledContainer = styled(Container)`
  margin-top: 50px;
  border: 3px solid white;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  padding: 50px 0px;
`

const StyledImage = styled(Image)`
  max-height: 350px;
  max-width: 1000px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
`

const FormDiv = styled(StyledDiv)`
  flex-direction: column;
  gap: 5px;
`

const ImagePage = () => {
  const id = useParams().imageId
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')

  useEffect(() => {
    imageService.getImage(id).then(returnedImage => {
      setImage(returnedImage)
    })
  }, [])

  const onUpdate = async (event) => {
    event.preventDefault()
    try {
      await imageService.updateImage(id, { ...image, title: title })
      setImage({ ...image, title: title })
    } catch (exception) {
      console.log(exception)
    }
  }

  const onDelete = async () => {
    try {
      await imageService.deleteImage(id)
      navigate('/')
    } catch (exception) {
      console.log(exception)
    }
  }

  if (!image) {
    return(
      <StyledContainer className="bg-dark" />
    )
  }

  return(
    <StyledContainer className="bg-dark">
      <h1>{image.title}</h1>
      <StyledImage src={image.image} />
      <StyledDiv>
        <Form onSubmit={onUpdate}>
          <Form.Group>
            <FormDiv>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={({ target }) => setTitle(target.value)}
              />
              <Button variant="primary" type="submit">
              Update
              </Button>
            </FormDiv>
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={onDelete}>
          Delete
        </Button>
      </StyledDiv>
    </StyledContainer>
  )
}

export default ImagePage