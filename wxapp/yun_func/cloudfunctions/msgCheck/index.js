// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')

let appid = 'wxf440ec69475cbdbf';
let secret = 'ad767313404a6385e693418e36e3d7a7';

let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxf440ec69475cbdbf&secret=ad767313404a6385e693418e36e3d7a7
// 云函数入口函数
exports.main = async (event, context) => {
  // 令牌许可
  let tokenResponse = await got(tokenUrl);
  
  return '毛问题啊';
}