const app = getApp()

Page({
  data: {
    files: []
  },
  chooseImage(e) {
    let that = this;
    wx.chooseImage({
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success(res) {
        console.log(res);
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        // ------------
        for(let i = 0; i < that.data.files.length; i++) {
          const filePath = res.tempFilePaths[i];
          let a = filePath.lastIndexOf('.');
          let b = filePath.lastIndexOf('.', filePath.length - 7);
          let c = filePath.substring(b + 1, a);
          const cloudPath = c + filePath.match(/\.[^.]+?$/);
          wx.cloud.uploadFile({
            cloudPath,
            filePath, // 文件路径
            success: res => {
              // get resource ID
              console.log('上传成功',res);
            },
            fail: err => {
              // handle error
              console.log('上传失败')
            }
          })
        }
      }
    })
  },
  previewImage(e) {
    let that = this;
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.id,
      urls: that.data.files
    })
  }
})