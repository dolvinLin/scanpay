import config from '../config/index'

const tips = {
    1: '未知错误',
    404: '资源未找到'
}

class Http {

    request({ url, method = 'GET', data = {}, params = {} }) {
        return new Promise((resolve, rejects) => {
            this._request({ url, method, data, params, resolve, rejects })
        })
    };

    _request({ url, method, data, params, resolve, rejects }) {
        wx.request({
            url: config.baseUrl + url,
            method, data,
            success: (response) => {
                switch (response.statusCode) {
                    case 200:
                        resolve(response.data);
                        break;
                    default:
                        rejects(response.statusCode);
                        this._show_error(response.statusCode)
                }
            },
            fail: (error) => {
                rejects(error)
                this._show_error()
            }
        })
    }
    _show_error(error_code = 1) {
        wx.showToast({
            title: tips[error_code] || '遇到了一些问题',
            icon: "none",
            duration: 2000
        })
    }
}

export default Http
