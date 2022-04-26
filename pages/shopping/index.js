// pages/shopping/index.js
import IndexModel from '../../model/index'
const indexModel = new IndexModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {},
  /* 获取 轮播图 */
  getBanner() {

  },
  /* 点击扫码 */
  handleScanCode() {
    wx.scanCode({
      onlyFromCamera: false,
      scanType: ["barCode", "qrCode"],
      success: async (response) => {
        /* 商品查询 */
        const { result } = await indexModel.getProduct({ qcode: response.result })
        /* add */
        this.addToCart(result[0])
        wx.navigateTo({ url: '/pages/cart/index' })
      },
    });
  },
  /* 添加购物车 */
  addToCart(goods) {
    let cart = wx.getStorageSync('cart') || ''
    if (cart) {
      const isHas = cart.some(item => item._id === goods._id)
      if (isHas) {
        cart.forEach(item => {
          if (item._id === goods._id) { item.num++ }
        })
      } else {
        cart.push(Object.assign({ num: 1 }, goods))
      }
    } else {
      cart = [Object.assign({ num: 1 }, goods)]
    }
    wx.setStorageSync('cart', cart)
  },
  /* 记得 , 逗号 */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() { },
});