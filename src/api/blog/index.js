import {
  baseUrl
} from '../axios/config'
import axios from '../axios/http'

export default {
  testBlog(params) {
    return axios.get(`${baseUrl}/testBlog`, {
      params: params
    })
  },
  projectManager(params) {
    return axios.get(`${baseUrl}/projectManager`, {
      params: params
    })
  },
}