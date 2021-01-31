import api from './http'
import { withLoading } from './decorate'
export class Api {
    /*********************************************************** 首页登录 ************************************************************************************/
    /**
     * 获取用户信息
     */
    @withLoading()
    baseIndex() {
        return api.get(`/base/index`)
    }
    /**
     * 首页短信验证码登录
     * @param {登录}} params
     */
    smsLogin(params: object) {
        const requestBody = {
            ...params
        }
        return api.post(`/base/login`, requestBody)
    }
}

export default new Api()
