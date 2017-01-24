document.addEventListener('DOMContentLoaded', function () {
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var second = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  clock.appendChild(minute)
  clock.appendChild(second)

  // set counter,
  var secondCount = 0
  // every 1000ms,
  setInterval(tickSecond, 10)
  // run tick function which will rotate the sec hand
  function tickSecond () {
    secondCount++
    second.style.transform = 'rotate(' + rotation(secondCount) + 'deg)'
    if (secondCount === 60) {
      secondCount = 0
    }
  }

  var minuteCount = 0
  setInterval(tickMinute, 10 * 60)
  function tickMinute () {
    minuteCount++
    minute.style.transform = 'rotate(' + rotation(minuteCount) + 'deg)'
    if (minuteCount === 60) {
      minuteCount = 0
    }
  }

  var hourCount = 0
  setInterval(tickHour, 10 * 60 * 2)
  function tickHour () {
    hourCount++
    hour.style.transform = 'rotate(' + hourRotation(hourCount) + 'deg)'
    if (hourCount === 360) {
      hourCount = 0
    }
  }

  function rotation (num) {
    if (num === 60) {
      return 0
    } else {
      return (num / 60) * 360
    }
  }

  function hourRotation (num) {
    if (num === 360) {
      return 0
    } else {
      return num
    }
  }

  //BONUS
  var now = new Date()
  var time = now.toLocaleTimeString()
  var timeArr = time.split(":")
  var currentHour = timeArr[0]
  var currentMinute = timeArr[1]
  var currentSecond = timeArr[2]
})
