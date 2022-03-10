import moment from 'moment'
import da from "element-ui/src/locale/lang/da";

// 格式化时间
export const fmtDate = (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(value).format(format)
}

//获取当前周开始结束时间
export const getCurrentWeekDays = (startTime) => {
    let start = moment(moment(startTime).week(moment(startTime).week()).startOf('week').valueOf()).format('YYYY-MM-DD')
    let end = moment(moment(startTime).week(moment(startTime).week()).endOf('week').valueOf()).format('YYYY-MM-DD')
    return [start,end]
}

//获取当前月开始结束时间
export const getCurrentMonthDays = (startTime) => {
    let start = moment(moment(startTime).month(moment(startTime).month()).startOf('month').valueOf()).format('YYYY-MM-DD')
    let end = moment(moment(startTime).month(moment(startTime).month()).endOf('month').valueOf()).format('YYYY-MM-DD')
    return [start,end]
}

// 获取上一周的开始结束时间
export const getLastWeekDays = (startTime) => {
    //moment(startTime).week()计算该时间在当年的周数
    //moment(startTime).week(moment(startTime).week())获取周数后根据周数和今天是周几算出此周对应周几的日期
    let start = moment(moment(startTime).week(moment(startTime).week()-1).startOf('week').valueOf()).format('YYYY-MM-DD')
    let end = moment(moment(startTime).week(moment(startTime).week()-1).endOf('week').valueOf()).format('YYYY-MM-DD')
    return [start,end]
}
// 获取下一周的开始结束时间
export const getNextWeekDays = (startTime) => {
    let start = moment(moment(startTime).week(moment(startTime).week()+1).startOf('week').valueOf()).format('YYYY-MM-DD')
    let end = moment(moment(startTime).week(moment(startTime).week()+1).endOf('week').valueOf()).format('YYYY-MM-DD')
    return [start,end]
}
// 获取上一月的开始结束时间
export const getLastMonthDays = (startTime) => {
    let start = moment(moment(startTime).month(moment(startTime).month()-1).startOf('month').valueOf()).format('YYYY-MM-DD')
    let end = moment(moment(startTime).month(moment(startTime).month()-1).endOf('month').valueOf()).format('YYYY-MM-DD')
    return [start,end]
}
// 获取下一月的开始结束时间
export const getNextMonthDays = (startTime) => {
    let start = moment(moment(startTime).month(moment(startTime).month()+1).startOf('month').valueOf()).format('YYYY-MM-DD')
    let end = moment(moment(startTime).month(moment(startTime).month()+1).endOf('month').valueOf()).format('YYYY-MM-DD')
    return [start,end]
}

// 获取时间戳
export const getDateString = (date) => {
    return new Date(date).getTime()
}

// 获取天数
export const getDays = (startDate, endDate) => {
    let startString = new Date(startDate).getTime()
    let endString = new Date(endDate).getTime()
    let days = parseInt((endString  -  startString)  /  1000  /  60  /  60  /24)
    return days
}

// 清空对象
export const clearObj = (obj) => {
    Object.keys(obj).forEach(key=>{
        if (Object.prototype.toString.call(obj[key]) === "[object String]"){
            obj[key] = ""
        }
        if (Object.prototype.toString.call(obj[key]) === "[object Number]"){
            obj[key] = 0
        }
        if (Object.prototype.toString.call(obj[key]) === "[object Array]"){
            obj[key] = []
        }
        if (Object.prototype.toString.call(obj[key]) === "[object Object]"){
            obj[key] = {}
        }
    })
    return obj
}