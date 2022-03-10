/* 判断校验结果是否都为true */
export const getValidResult = (list) => {
    let validResult = []
    list.forEach(item=>{
        item.validate(valid=>{
            validResult.push(valid)
        })
    })
    return !(validResult.indexOf(false) > -1)
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  // console.log(/^(https?:|mailto:|tel:)/.test(path));
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 网址校验
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * 小写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 大写字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 邮箱校验
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * 字符串
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  return typeof str === 'string' || str instanceof String
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export function isPlainObject(obj) {
  let prototype
  // eslint-disable-next-line no-return-assign
  return Object.prototype.toString.call(obj) === '[object Object]' &&
    (prototype = Object.getPrototypeOf(obj), prototype === null ||
    prototype === Object.getPrototypeOf({}))
}

export const isMobile = num => {
  return /^1[3456789]\d{9}$/.test(num)
}



/*
 * 校验整数或小数
 */
export function isNumber(rule, value, callback) {
  const result = /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value)
  if (!result) {
    return callback(new Error('请输入数字'))
  } else {
    callback()
  }
}
export const  isNumber1 = value => {
  return /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value)
}
/* 两位小数*/
export function isAmount(rule, value, callback) {
    const re = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value)
    if (!re) {
        return callback(new Error('请输入正确的数字格式！最多保留两位小数！'))
    } else {
        callback()
    }
}

/* 字母*/
export const isLetters = (rule, value, callback) => {
  const re = /^[_A-Za-z]+$/.test(value)
  if (!re) {
    return callback(new Error('请输入英文'))
  } else {
    callback()
  }
}

/*数字*/
export function numberOnly(rule, value, callback) {
  const reg = /^[0-9]*$/
  const re = reg.test(value)
  if (!re) {
    return callback(new Error('请输入数字'))
  } else {
    callback()
  }
}

/* 正整数*/
export function isAmount2(rule, value, callback) {
  const re = /^[0-9]*[1-9][0-9]*$/.test(value)
  if (!re) {
    return callback(new Error('请输入正整数'))
  } else {
    callback()
  }
}

/*手机号*/
export function telNumber(rule, value, callback) {
    const reg=/^[1][3,4,5,7,8,9][0-9]{9}$/.test(value)
    if (!reg) {
        return callback(new Error('手机号格式错误!'))
    }else {
        callback()
    }
}

/*银行卡号*/
export function bankCard(rule, value, callback) {
    const reg=/^([1-9]{1})(\d{14}|\d{18})$/.test(value)
    if (!reg) {
        return callback(new Error('银行卡号格式错误!'))
    }else {
        callback()
    }
}

/*身份证校验*/
export function identityCard(rule, value, callback) {
    const reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
    if (!reg) {
        return callback(new Error('身份证号格式错误!'))
    }else {
        callback()
    }
}

