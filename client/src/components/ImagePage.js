import { Container, Image, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../assets/logo512.png'

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

  const onUpdate = (event) => {
    event.preventDefault()
  }

  const onDelete = (event) => {
    event.preventDefault()
    console.log(logo)
  }

  return(
    <StyledContainer className="bg-dark">
      <h1>Image Title</h1>
      <StyledImage src={logo} />
      <StyledDiv>
        <Form onSubmit={onUpdate}>
          <Form.Group>
            <FormDiv>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
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