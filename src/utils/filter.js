import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
Vue.filter('numberByW', function (number) {
  if (number > 30000) {
    return parseInt((number * 10) / 10000) / 10 + 'W'
  }
  return number
})
Vue.filter('dateByMonth', function (dataStr) {
  return parseInt(moment(dataStr).format('MM'))
})
Vue.filter('dateByDay', function (dataStr) {
  return parseInt(moment(dataStr).format('DD'))
})
Vue.filter('dateDiff', function (dataStr) {
  let date1 = moment(dataStr).valueOf()
  let date2 = moment(new Date()).valueOf()
  let cha = parseInt((date2 - date1) / 1000)
  let unit = '秒'
  if (cha > 60) {
    cha /= 60
    unit = '分钟'
  } else {
    cha = parseInt(cha * 10) / 10
    return cha + unit
  }
  if (cha > 60) {
    cha /= 60
    unit = '小时'
  } else {
    cha = parseInt(cha * 10) / 10
    return cha + unit
  }
  if (cha > 24) {
    cha /= 24
    unit = '天'
  } else {
    cha = parseInt(cha * 10) / 10
    return cha + unit
  }
  if (cha > 30) {
    cha /= 30
    unit = '个月'
  } else {
    cha = parseInt(cha * 10) / 10
    return cha + unit
  }
  if (cha > 12) {
    cha /= 12
    unit = '年'
  } else {
    cha = parseInt(cha * 10) / 10
    return cha + unit
  }
})

export default Vue
