import {
  baseUrl
} from '../axios/config'
import axios from '../axios/http'

export default {
  //get请求示例
  getBlog(params) {
    return axios.get(`${baseUrl}/getBlog`, {
      params: params
    })
  },
  //post请求示例
  login(params) {
    return axios.post(`${baseUrl}/login`, params)
  },
}