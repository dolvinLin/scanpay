// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    balance: 4,
    isBalance: true,
    isMore: false
  },
  switchBalance(e) {
    this.setData({
      isBalance: e.detail.value
    })
  },
  initGoodsList() {
    console.log(wx.getStorageSync('cart'));
    const cart = wx.getStorageSync('cart') || ''
    this.setData({
      goodsList: cart
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.initGoodsList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.initGoodsList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})