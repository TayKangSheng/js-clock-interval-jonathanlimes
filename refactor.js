// var secondCount = currentSecond
// setInterval(tickSecond, 1000)
// function tickSecond () {
//   secondCount++
//   second.style.transform = 'rotate(' + secondRotation(secondCount) + 'deg)'
//   second.style.transition = 'transform 0.2s cubic-bezier(.5,2.08,.55,.44)'
//   // if (secondCount === 60) {
//   //   secondCount = 0
//   // }
// }
//
// var minuteCount = currentMinute
// console.log(currentMinute)
// if (secondCount !== 0) {
//   var secondDelay = 60 - secondCount
//   setTimeout(setInterval(tickMinute, 1000 * 60), 1000 * secondDelay)
// }
// setInterval(tickMinute, 1000 * 60)
// function tickMinute () {
//   minuteCount++
//   minute.style.transform = 'rotate(' + minuteRotation(minuteCount) + 'deg)'
//   minute.style.transition = 'transform 0.3s cubic-bezier(.4,2.08,.55,.44)'
//   // if (minuteCount === 60) {
//   //   minuteCount = 0
//   // }
// }
//
// var hourCount = currentHour
// if (minuteCount !== 60) {
//   var minuteDelay = 60 - minuteCount
//   setTimeout(setInterval(tickHour, 1000 * 60 * 60), 1000 * 60 * minuteDelay)
// }
// function tickHour () {
//   hourCount++
//   hour.style.transform = 'rotate(' + hourRotation(hourCount, minuteCount, secondCount) + 'deg)'
//   if (hourCount === 12) {
//     hourCount = 0
//   }
// }
