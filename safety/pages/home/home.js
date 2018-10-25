// pages/home/home.js
Page({
  data: {
    imgUrls: [
      '/images/p1.png',
      '/images/p2.png',
      '/images/p3.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
  }
 
})