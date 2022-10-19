import axios from 'axios'
const baseUrl = '/api/images'

const uploadImage = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { uploadImage }