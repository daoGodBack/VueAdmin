var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-mm-dd'
function padding (s, len) {
  var len2 = len - (s + '').length
  for (let i = 0; i < len2; i++) { s = '0' + s }
  return s
}

export default {
  // getQueryStringByName: function (name) {
  //   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  // }
  formatDate: {
    format: function (date, pattern) {
      pattern = pattern || DEFAULT_PATTERN
      return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
          case 'y':return padding(date.getFullYear(), $0.length)
          case 'M':return padding(date.getMonth() + 1, $0.length)
          case 'd':return padding(date.getDate(), $0.length)
          case 'w':return date.getDay() + 1
          case 'h':return padding(date.getHours(), $0.length)
          case 'm':return padding(date.getMinutes(), $0.length)
          case 's':return padding(date.getSeconds(), $0.length)
        }
      })
    }
  }
}
