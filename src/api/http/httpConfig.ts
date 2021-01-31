// import { isFormData } from '@/utils/helper'

export default {
    baseURL: '/ehrService',
    withCredentials: true,
    timeout: 1000 * 30,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Accept: 'application/json, text/plain, */*'
    }
    //   transformRequest: [(data) => {
    //     if (isFormData(data)) {
    //       return data
    //     }
    //     return typeof data === 'string' ? data : JSON.stringify(data)
    //   }]
}
