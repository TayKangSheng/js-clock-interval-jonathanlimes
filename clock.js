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
    return secs * (360 / 60)
  }

  function minuteRotation (mins) {
    return mins * (360 / 60)
  }

  function hourRotation (hrs) {
    return hrs * (360 / 12)
  }

  var secondCount = currentSecond
  setInterval(tickSecond, 10)
  function tickSecond () {
    secondCount++
    second.style.transform = 'rotate(' + secondRotation(secondCount) + 'deg)'
    if (secondCount === 60) {
      secondCount = 0
    }
  }

  var minuteCount = currentMinute
  minute.style.transform = 'rotate(' + minuteRotation(minuteCount, secondCount) + 'deg)'
  // to make sure minute hand turns only when the second hand hits twelve
  if (secondCount !== 0) {
    var secondDelay = 60 - secondCount
    setTimeout(setInterval(tickMinute, 10 * 60), 10 * secondDelay)
  }
  function tickMinute () {
    minuteCount++
    minute.style.transform = 'rotate(' + minuteRotation(minuteCount, secondCount) + 'deg)'
    if (minuteCount === 60) {
      minuteCount = 0
    }
  }

  var hourCount = currentHour
  hour.style.transform = 'rotate(' + hourRotation(hourCount, minuteCount, secondCount) + 'deg)'
  // to make sure hour hand turns only when the minute hand hits twelve
  if (minuteCount !== 60) {
    var minuteDelay = 60 - minuteCount
    setTimeout(setInterval(tickHour, 10 * 60 * 60), 10 * minuteDelay)
  }
  function tickHour () {
    hourCount++
    hour.style.transform = 'rotate(' + hourRotation(hourCount, minuteCount, secondCount) + 'deg)'
    if (hourCount === 12) {
      hourCount = 0
    }
  }
})
