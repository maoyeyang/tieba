const getCookie = (cookieName) => {
  var strCookie = document.cookie
  var arrCookie = strCookie.split('; ')
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split('=')
    if (cookieName === arr[0]) {
      return arr[1]
    }
  }
  return ''
}

const delCookie = (name) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

const setCookie = (name, value) => {
  var exp = new Date()
  exp.setTime(exp.getTime() + 1 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

const levelByEXP = (number) => {
  if (number >= 300000) {
    return 18
  }
  if (number >= 100000) {
    return 17
  }
  if (number >= 60000) {
    return 16
  }
  if (number >= 30000) {
    return 15
  }
  if (number >= 18000) {
    return 14
  }
  if (number >= 10000) {
    return 13
  }
  if (number >= 6000) {
    return 12
  }
  if (number >= 3000) {
    return 11
  }
  if (number >= 2000) {
    return 10
  }
  if (number >= 1000) {
    return 9
  }
  if (number >= 500) {
    return 8
  }
  if (number >= 200) {
    return 7
  }
  if (number >= 100) {
    return 6
  }
  if (number >= 50) {
    return 5
  }
  if (number >= 30) {
    return 4
  }
  if (number >= 15) {
    return 3
  }
  if (number >= 5) {
    return 2
  }
  if (number >= 0) {
    return 1
  }
}
const EXPByMax = (number) => {
  if (number >= 300000) {
    return 'MAX'
  }
  if (number >= 100000) {
    return 300000
  }
  if (number >= 60000) {
    return 100000
  }
  if (number >= 30000) {
    return 60000
  }
  if (number >= 18000) {
    return 30000
  }
  if (number >= 10000) {
    return 18000
  }
  if (number >= 6000) {
    return 10000
  }
  if (number >= 3000) {
    return 6000
  }
  if (number >= 2000) {
    return 3000
  }
  if (number >= 1000) {
    return 2000
  }
  if (number >= 500) {
    return 1000
  }
  if (number >= 200) {
    return 500
  }
  if (number >= 100) {
    return 200
  }
  if (number >= 50) {
    return 100
  }
  if (number >= 30) {
    return 50
  }
  if (number >= 15) {
    return 30
  }
  if (number >= 5) {
    return 15
  }
  if (number >= 0) {
    return 5
  }
}

export {
  getCookie,
  delCookie,
  setCookie,
  levelByEXP,
  EXPByMax
}
