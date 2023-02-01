import http from './configAxios'

// Read all products
const getAllProduct = () => {
  return http.get('/products')
}

// Read product by id
const getProductById = (id) => {
  return http.get(`/products/${id}`)
}

// Add new product
const addProduct = (data) => {
  return http.post('/products', data)
}

// Update product
const updateProduct = (id, data) => {
  return http.put(`/products/${id}`, data)
}

// Delete product
const deleteProduct = (id) => {
  return http.delete(`/products/${id}`)
}

export default {
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
}

