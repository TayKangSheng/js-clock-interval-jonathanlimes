document.addEventListener('DOMContentLoaded', function () {
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var second = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  clock.appendChild(minute)
  clock.appendChild(second)

  // BONUS SECTION
  var now = new Date()
  var currentHour = now.getHours() % 12
  var currentMinute = now.getMinutes()
  var currentSecond = now.getSeconds()

  function secondRotation (secs) {
    if (secs === 60) {
      return 0
    } else {
      return secs * (360 / 60)
    }
  }

  function minuteRotation (mins, secs) {
    if (mins === 60) {
      return 0
    } else {
      return (mins * (360 / 60)) + (secs * (360 / 60 / 60))
    }
  }

  function hourRotation (hrs, mins, secs) {
    if (hrs === 12) {
      return 0
    } else {
      return (hrs * (360 / 12)) + (mins * (360 / 12 / 60)) + (secs * (360 / 12 / 60 / 60))
    }
  }

  var secondCount = currentSecond
  setInterval(tickSecond, 100)
  function tickSecond () {
    secondCount++
    second.style.transform = 'rotate(' + secondRotation(secondCount) + 'deg)'
    if (secondCount === 60) {
      secondCount = 0
    }
  }

  var minuteCount = currentMinute
  minute.style.transform = 'rotate(' + minuteRotation(minuteCount, secondCount) + 'deg)'
  setInterval(tickMinute, 100 * 60)
  function tickMinute () {
    minuteCount++
    minute.style.transform = 'rotate(' + minuteRotation(minuteCount, secondCount) + 'deg)'
    if (minuteCount === 60) {
      minuteCount = 0
    }
  }

  var hourCount = currentHour
  hour.style.transform = 'rotate(' + hourRotation(hourCount, minuteCount, secondCount) + 'deg)'
  setInterval(tickHour, 100 * 60 * 60)
  function tickHour () {
    hourCount++
    hour.style.transform = 'rotate(' + hourRotation(hourCount, minuteCount, secondCount) + 'deg)'
    if (hourCount === 12) {
      hourCount = 0
    }
  }
})
