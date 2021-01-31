/* eslint-disable no-unreachable */

import axios from 'axios'
import httpConfig from './httpConfig'
import httpInterceptors from './httpInterceptors'

const api: any = axios.create(httpConfig)
Object.keys(httpInterceptors).forEach((key: any) => {
    const Interceptor: any = httpInterceptors[key]
    if (!Interceptor) {
        return
    }
    api.interceptors[key].use(...Interceptor)
})
export default api