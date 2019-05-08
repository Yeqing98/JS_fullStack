// miniprogram/pages/user/user.js
const db = wx.cloud.database();
const photos = db.collection('photos')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据正在加载中...'
    });
    wx.cloud.callFunction({
      name:'getOpenId',
      success: res => {
        console.log(res);
        const openid = res.result.openid;
        photos.where({
          _openid: openid
        })
        .get()
        .then(photosRes => {
          this.setData({
            photos: photosRes.data,
          });
          wx.hideLoading();
        })
      }
    });
    
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