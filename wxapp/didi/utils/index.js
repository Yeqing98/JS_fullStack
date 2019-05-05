// req   工具类
const DEFAULT_OPT = {
    url: '',
    data: {},
    header: {
        'Content-Type': 'application/jspn'
    },
    method: 'GET',
    dataType: 'json'
}
let util = {
    request(opt) {
        const options = {
            ...DEFAULT_OPT,
            ...opt
        };
        const {url,data,header,method,dataType} = options;
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success: (res) => {
                    resolve(res.data);
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
    }
}

export default util;