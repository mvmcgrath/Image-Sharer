import { Container, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { useState } from 'react'
import imageService from '../services/image'

const StyledDiv = styled.div`
  width: 600px;
  height: 400px;
  margin-top: 50px;
  color: white;
  border: 3px solid white;
  border-radius: 25px;
`

const StyledVerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`

const Upload = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    if (!(/^image/.test(image.type))) {
      console.log('Not an image!')
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(image)

    fileReader.onload = async () => {
      await imageService.uploadImage({ image: fileReader.result, title })
    }
    console.log(image)
    console.log(title)
  }

  return (
    <Container fluid bg="dark" className="d-flex justify-content-center">
      <StyledDiv className="bg-dark p-4 d-flex justify-content-center">
        <div className="w-50">
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <StyledVerticalFlex>
                <div>
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={({ target }) => setTitle(target.value)}
                  />
                </div>
                <div>
                  <Form.Label>Image:</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={({ target }) => setImage(target.files[0])}
                  />
                </div>
                <Button variant="primary" type="submit">
                  Upload
                </Button>
              </StyledVerticalFlex>
            </Form.Group>
          </Form>
        </div>
      </StyledDiv>
    </Container>
  )
}

export default Upload