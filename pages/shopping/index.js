// pages/shopping/index.js
import IndexModel from '../../model/index'
const indexModel = new IndexModel()

Page({
    /**
     * 页面的初始数据
     */
    data: {},
    /* 点击扫码 */
    scanCode() {
        wx.scanCode({
            onlyFromCamera: false,
            scanType: ["barCode", "qrCode"],
            success: (res) => {
                this.scancode(res.result)
            },
        });
    },
    /* 获取商品信息 */
    scancode(qcode) {
        indexModel.getProduct({
            qcode: qcode
        }).then(res => {
            console.log(res)
            wx.switchTab({
                url: '/pages/product/index',
                success: (result) => { },
                fail: (res) => { },
                complete: (res) => { },
            })
        })
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