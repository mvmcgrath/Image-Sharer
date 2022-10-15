import { Container, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const Login = () => {
  const onSubmit = (event) => {
    event.preventDefault()
  }

  return(
    <Container fluid bg="dark" className="d-flex justify-content-center">
      <StyledDiv className="bg-dark p-4 d-flex justify-content-center">
        <div className="w-50">
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <StyledVerticalFlex>
                <div>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                  />
                </div>
                <div>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                  />
                </div>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <StyledLink to="/register">Don&#39;t have an account?</StyledLink>
              </StyledVerticalFlex>
            </Form.Group>
          </Form>
        </div>
      </StyledDiv>
    </Container>
  )
}

export default Login