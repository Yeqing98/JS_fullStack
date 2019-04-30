//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function() {
    this.popup = this.selectComponent('#popup')
  },
  showPopup: function() {
    // 弹窗
    this.popup.showPopup();
  },
  _error() {
    this.popup.hidePopup();
  },
  _success() {
    this.popup.hidePopup();
  },
  change: function(e) {
    // console.log('catch')
    var mComponent = this.selectComponent('#myComponent');
    mComponent.setText('外部调用了')
  },
  onTextChange: function() {
    wx.showToast({
      title: '抓获事件'
    })
  }
})
