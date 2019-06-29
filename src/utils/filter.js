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

export default Vue
