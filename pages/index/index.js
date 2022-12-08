//index.js
//获取应用实例
const app = getApp()

Page({
  go_1:function(){
    wx.navigateTo({
      url: '../look_for_score/look_for_score'
    })
  },

  go_5:function(){
    wx.navigateTo({
      url: '../university_introduce/university_introduce'
    })
  },

  go_6: function () {
    wx.navigateTo({
      url: '../teacher/teacher'
    })
  },

  go_7: function () {
    wx.navigateTo({
      url: '../scu_special/scu_special'
    })
  },

  go_8: function () {
    wx.navigateTo({
      url: '../school_life/school_life'
    })
  },
  // data: {
  //   motto: 'is world',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo')
  // },
  //事件处理函数
  // go:function(){
  //   wx.navigateTo({
  //     url: '../look_for_score/look_for_score'
  //   })
  // },
  // go_2:function(){
  //   wx.navigateTo({
  //     url:'../university_introduce/university_introduce'
  //   })
  // }
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
