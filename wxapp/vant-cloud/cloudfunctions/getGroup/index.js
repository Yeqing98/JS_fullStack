// 云函数入口文件
const cloud = require('wx-server-sdk')

const db = cloud.database();
const group = db.collection('group')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userInfo = event.userInfo
  return await group.doc(
    "oVkQF5u1z1_TEuIoCse-ZaAUBihA"
  )
  .get()
}