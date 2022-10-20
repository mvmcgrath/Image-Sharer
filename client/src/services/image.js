import axios from 'axios'
const baseUrl = '/api/images'

const uploadImage = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const getAllImages = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { uploadImage, getAllImages }