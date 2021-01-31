import router from '@/router'
import { isFormData, getUrlParam } from '@/utils/helper'
import errorHandle from './errorHandle'

/**
 * @desc NO_ERROR_HANDLER
 * @param { method: string, code: number } NO_ERROR_HANDLER { http method name， http res code}
 */
const NO_ERROR_HANDLER: any [] = []

/**
 *
 * @param res 请求返回实体
 * @returns {boolean} 是否需要通用error处理
 */
function isNotErrorhandle(res) {
    const method = res.config.url
    const code = res.data.code
    return NO_ERROR_HANDLER.some(v => {
        return (
            method.indexOf(v.method) !== -1 && (!code || v.code.includes(code))
        )
    })
}

/*
 * 根据请求的类型获取对应的数据字段
 */
function getRqDataKey(method) {
    if (['post', 'put'].includes(method)) {
        return 'data'
    }
    if (['get', 'delete'].includes(method)) {
        return 'params'
    }
    return ''
}

// 默认请求的拦截器
const reqestHandle = config => {
    const method = config.method.toLowerCase()
    const paramKey = getRqDataKey(method)
    const params = config[paramKey]

    if (isFormData(params)) {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        return config
    }

    const ticket = getUrlParam('ticket')
    //   const appId = getUrlParam('appid') || getUrlParam('client_id') || getUrlParam('appId')

    // 所有请求加入ticket 和 appid 参数 （加到路径上）
    if (ticket && config.url === '/base/index') {
        config.url += `?ticket=${ticket}`
    }

    if (Array.isArray(params)) {
        config[paramKey] = params
    }
    return config
}

// 默认请求的错误拦截器
const errorRqHandle = error => Promise.reject(error)

// 默认响应的拦截器
const responseHandle = res => {
    if (!res.data.success && !isNotErrorhandle(res)) {
        const { error_code } = res?.data?.data
        if (error_code === 10004) {
            router
                .replace({
                    path: '/error',
                    query: {
                        errorCode: 404,
                        text: 'ticket失效，请重新进入'
                    }
                })
                .catch(() => {
                    console.warn('it is ok')
                })
            return
            // location.replace('/ehr-web/error')
        }
        errorHandle(res)
        return Promise.reject(res)
    }
    return res
}

// 默认响应的错误拦截器
const errorResandle = error => {
    return errorHandle(error.response, error)
}

export default {
    request: [reqestHandle, errorRqHandle],
    response: [responseHandle, errorResandle]
}
