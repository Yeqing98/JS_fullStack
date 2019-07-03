import originalJsonp from 'jsonp';
import { CODE_SUCCESS } from '../api/config';

const jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        originalJsonp(buildUrl(url, data), option, (err, res) => {
            if(!err) {
                if(res && res.code === CODE_SUCCESS) {
                    resolve(res);
                }else {
                    console.log('接口出错了')
                    reject('接口出错了');
                }
            }else {
                console.log('接口出错了')
                reject(err)
            }
        })
    })
}

function buildUrl(url, data) {
    let param = [];
    for(var k in data) {
        param.push(`${k}=${encodeURIComponent(data[k])}`);
    }
    let paramStr = param.join('&');
    if(url.indexOf('?') === -1) {
        url += "?" + paramStr;
    }else {
        url += "&" + paramStr;
    }
    return url
}
export default jsonp;