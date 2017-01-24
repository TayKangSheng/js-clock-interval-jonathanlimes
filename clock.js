document.addEventListener('DOMContentLoaded', function () {
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var second = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  clock.appendChild(minute)
  clock.appendChild(second)

  // BONUS SECTION
  var now = new Date()
  var time = now.toLocaleTimeString()
  var timeArr = time.split(':')
  var currentHour = parseInt(timeArr[0])
  function amPMHour () {
    if (currentHour > 12) {
      return currentHour - 12
    } else {
      return currentHour
    }
  }
  var formattedHour = amPMHour()
  var currentMinute = parseInt(timeArr[1])
  var currentSecond = parseInt(timeArr[2])

  function rotation (num) {
    if (num === 60) {
      return 0
    } else {
      return (num / 60) * 360
    }
  }

  function hourRotation (num) {
    if (num === 12) {
      return 0
    } else {
      return (num / 12) * 360
    }
  }

  var secondCount = currentSecond
  setInterval(tickSecond, 1000)
  function tickSecond () {
    secondCount++
    second.style.transform = 'rotate(' + rotation(secondCount) + 'deg)'
    if (secondCount === 60) {
      secondCount = 0
    }
  }

  var minuteCount = currentMinute
  minute.style.transform = 'rotate(' + rotation(minuteCount) + 'deg)'
  setInterval(tickMinute, 1000 * 60)
  function tickMinute () {
    minuteCount++
    minute.style.transform = 'rotate(' + rotation(minuteCount) + 'deg)'
    if (minuteCount === 60) {
      minuteCount = 0
    }
  }

  var hourCount = formattedHour
  hour.style.transform = 'rotate(' + hourRotation(hourCount) + 'deg)'
  setInterval(tickHour, 1000 * 60 * 60)
  function tickHour () {
    hourCount++
    hour.style.transform = 'rotate(' + hourRotation(hourCount) + 'deg)'
    if (hourCount === 12) {
      hourCount = 0
    }
  }
})
