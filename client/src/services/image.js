import axios from 'axios'
const baseUrl = '/api/images'

const uploadImage = async (newImage) => {
  const response = await axios.post(baseUrl, newImage)
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
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const updateImage = async (id, newImage) => {
  const response = await axios.put(`${baseUrl}/${id}`, newImage)
  return response.data
}

export default { uploadImage, getAllImages, getImage, deleteImage, updateImage }