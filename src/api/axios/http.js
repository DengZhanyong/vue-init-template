import axios from 'axios';
import router from '../../router/index';
import store from '../../store/index';
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

const errorHandle = (status) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      // toLogin()   //403 token过期,跳转登录页
      break;
    case 403:
      // tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
      // 404请求不存在
    case 404:
      // console.log('请求资源不存在');
      break;
  }
}

// 创建axios实例
var instance = axios
instance.defaults.timeout = 10000
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//请求拦截器
instance.interceptors.request.use(
  config => {
    const token = store.state.token;
    token && (config.headers.Authorization = 'Bearer ' + token);
    return config;
  },
  error => Promise.error(error)
)
//响应拦截器
instance.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
  error => {
    const {
      response
    } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围 
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        //    store.commit('changeNetwork', false);
      } else {
        return Promise.reject(error);
      }
    }
  });

export default instance;