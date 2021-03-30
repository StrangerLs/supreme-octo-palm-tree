import api from "./apiConfig"

export const getContents = async () => {
  try {
    const response = await api.get("/contents")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getContent = async id => {
  try {
    const response = await api.get(`/contents/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createContent = async content => {
  try {
    const response = await api.post("/contents", content)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateContent = async (id, content) => {
  try {
    const response = await api.put(`/contents/${id}`, content)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteContent = async id => {
  try {
    const response = await api.delete(`/contents/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}