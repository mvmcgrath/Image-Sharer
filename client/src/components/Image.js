import { Card, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled(Card)`
  margin-top: 20px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const Image = ({ images }) => {
  return (
    <Row xs={1} md={5} className="g-4">
      {images.map((img) =>
        <Col key={img.imageId}>
          <StyledLink to={`/image/${img.imageId}`}>
            <StyledCard bg="dark">
              <Card.Img variant="top" src={img.image} />
              <Card.Body>
                <Card.Title>{img.title}</Card.Title>
              </Card.Body>
            </StyledCard>
          </StyledLink>
        </Col>
      )}
    </Row>
  )
}

export default Image