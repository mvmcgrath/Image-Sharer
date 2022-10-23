import axios from 'axios'
const baseUrl = '/api/images'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const uploadImage = async (newImage) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newImage, config)
  return response.data
}

const getAllImages = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getImage = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const deleteImage = async (id) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

const updateImage = async (id, newImage) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}/${id}`, newImage, config)
  return response.data
}

export default { uploadImage, getAllImages, getImage, deleteImage, updateImage, setToken }