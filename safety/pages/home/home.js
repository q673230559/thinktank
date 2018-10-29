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
    proList: [
    {
      logo: "/images/logo.jpg",
      title: "精英贷",
      desc: "22周岁以上即可\n最快3小时下款"
    },
      {
        logo: "/images/logo.jpg",
        title: "精英贷",
        desc: "22周岁以上即可\n最快3小时下款"
      },
      {
        logo: "/images/logo.jpg",
        title: "精英贷",
        desc: "22周岁以上即可\n最快3小时下款"
      },
      {
        logo: "/images/logo.jpg",
        title: "精英贷",
        desc: "22周岁以上即可\n最快3小时下款"
      },
      {
        logo: "/images/logo.jpg",
        title: "精英贷",
        desc: "22周岁以上即可\n最快3小时下款"
      }
    ]
  },
  onLoad: function(){
    this.setData({
      test: "01",
    })
  },
  toDetail: function(e){
    console.log(e);
    var index=e.currentTarget.dataset.index;
    console.log(index);
  }
 
})