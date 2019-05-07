// miniprogram/pages/index/index.js
import Notify from '../dist/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    groupName: ''
  },
  onGroupNameChange(event) {
    // console.log(event)
    this.setData({
      groupName: event.detail
    })
  },
  showNewGroupModal() {
    this.setData({
      show: true
    })
  },
  closeDialog() {
    this.setData({
      show: false
    })
  },
  createGroup() {
    let that = this
    if(that.data.groupName === '') {
      Notify({
        text: '起个名字吧',
        duration: 1500,
        selector: '#notify-selector',
        backgroundColor: '#dc3545'
      });
      that.selectComponent('#new-group-model').stopLoading()
      return
    } else {
      wx.cloud.callFunction({
        name: 'createGroup',
        data: {
          groupName: that.data.groupName
        },
        success(res) {
          console.log(res)
          that.setData({
            show: false,
            groupName: ''
          })
          Notify({
            text: '创建成功',
            duration: 1500,
            selector: '#notify-selector',
            backgroundColor: '#28a745'
          });
          setTimeout(() => {
            wx.switchTab({
              url: `/pages/group/group`
            })
          },1500)
        },
        fail(error) {
          console.log(error)
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})