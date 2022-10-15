import { useParams, Navigate } from 'react-router-dom'


const Redirect = () => {
  const id = useParams().imageId

  return (
    <Navigate to={`../../../../image/${id}`} />
  )
}

export default Redirect