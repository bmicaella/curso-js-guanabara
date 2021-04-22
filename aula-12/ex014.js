var dayNow = new Date()
var weekDay = dayNow.getDay()

/*  0 = sunday
    1 = monday
    2 = tuesday
    3 = wednesday
    4 = thursday
    5 = friday
    6 = saturday 
*/

switch (weekDay) {
    case 0:
        console.log('today is sunday! yeaay')
        break
    case 1:
        console.log('today is monday! yeaay')
        break
    case 2:
        console.log('today is tuesday! yeaay')
        break
    case 3:
        console.log('today is wednesday! yeaay')
        break
    case 4:
        console.log('today is thursday! yeaay')
        break
    case 5:
        console.log('today is friday! yeaay')
        break
    case 6:
        console.log('today is saturday! yeaay')
        break
    default:
        console.log('error')
}