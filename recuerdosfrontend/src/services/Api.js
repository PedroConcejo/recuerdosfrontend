import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async signup (newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },
  async login (user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },
  async getAllLocations () {
    const response = await API.get('/locations')
    console.log(response)
    return response.data
  },
  async getAllCategories () {
    const response = await API.get('/categories')
    return response.data
  },
  async getAllPartners () {
    const response = await API.get('/partners')
    return response.data
  },
  async createTask (newtask) {
    const response = await API.post('/me', {
      ...newtask
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },

  async deleteTask (taskid) {
    const response = await API.delete(`/me/${taskid}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async getTaskById (taskid) {
    const response = await API.get(`/me/${taskid}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  },
  async updateTask (taskid, edittask) {
    const response = await API.put(`/me/${taskid}`, {
      ...edittask
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return response.data
  }
}
