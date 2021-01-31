import { Message } from 'element-ui'
import { ResponseData } from './interface'
const StatusMap = {
    status500: '服务器错误',
    status404: '接口不存在',
    status403: '无权限访问',
    default: '未知错误'
}

const resError = (res: ResponseData) => {
    Message({
        type: 'error',
        message: res?.data?.data?.error_description || '网络超时'
    })
}

const errorHandle = (error: any) => {
    const status = error.response ? error.response.status : '600'
    switch (status) {
        case 404:
            return Promise.reject(StatusMap.status404)
        case 403:
            return Promise.reject(StatusMap.status403)
        case 500:
            return Promise.reject(StatusMap.status500)
        default:
            return Promise.reject(StatusMap.default)
    }
}

export default (res: ResponseData, error: unknown) => {
    if (error) {
        return errorHandle(error)
    }
    return resError(res)
}
