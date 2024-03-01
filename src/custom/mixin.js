export default {
  onLoad() {
    // 设置默认的转发参数
    return {
      title: '', // 默认为小程序名称
      path: '', // 默认为当前页面路径
      imageUrl: '', // 默认为当前页面的截图
    }
  },
  onShareAppMessage() {
    return {
      title: '', // 默认为小程序名称
      path: '', // 默认为当前页面路径
      imageUrl: '', // 默认为当前页面的截图
    }
  },
  onShareTimeline(res) {
    console.log(res)
    if (res.from === 'button') { // 来自页面内分享按钮
      console.log(res.target)
    }
    return {
      title: 'XX APP，为您提供XX服务！',
    }
  },
}
