import { Container, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

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

const StyledTable = styled(Table)`
  border: 3px solid white;
  text-align: center;
  font-size: 1.5rem;
`

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers([{ username: 'Bob Bob', id: 1 }, { username: 'Bob Bob', id: 2 }, { username: 'Bob Bob', id: 3 }])
  }, [])

  return (
    <StyledContainer className="bg-dark">
      <h1>Users</h1>
      <StyledTable className="w-50 rounded">
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>
                <StyledLink to={`../user/${user.id}`}>
                  {user.username}
                </StyledLink>
              </td>
            </tr>)}
        </tbody>
      </StyledTable>
    </StyledContainer>
  )
}

export default UserList