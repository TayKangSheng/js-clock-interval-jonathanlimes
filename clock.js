document.addEventListener('DOMContentLoaded', function () {
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var second = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  clock.appendChild(minute)
  clock.appendChild(second)

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
  setInterval(tickSecond, 1000)
  function tickSecond () {
    secondCount++
    second.style.transform = 'rotate(' + secondRotation(secondCount) + 'deg)'
    second.style.transition = 'transform 0.2s cubic-bezier(.4,2.08,.55,.44)'
    if (secondCount === 60) {
      secondCount = 0
    }
  }

  var minuteCount = currentMinute
  minute.style.transform = 'rotate(' + minuteRotation(minuteCount) + 'deg)'
  if (secondCount !== 0) {
    var secondDelay = 60 - secondCount
    setTimeout(setInterval(tickMinute, 1000 * 60), 1000 * secondDelay)
  }
  function tickMinute () {
    minuteCount++
    minute.style.transform = 'rotate(' + minuteRotation(minuteCount) + 'deg)'
    minute.style.transition = 'transform 0.3s cubic-bezier(.4,2.08,.55,.44)'
    if (minuteCount === 60) {
      minuteCount = 0
    }
  }

  var hourCount = currentHour
  hour.style.transform = 'rotate(' + hourRotation(hourCount) + 'deg)'
  if (minuteCount !== 60) {
    var minuteDelay = 60 - minuteCount
    setTimeout(setInterval(tickHour, 1000 * 60 * 60), 1000 * 60 * minuteDelay)
  }
  function tickHour () {
    hourCount++
    hour.style.transform = 'rotate(' + hourRotation(hourCount) + 'deg)'
    if (hourCount === 12) {
      hourCount = 0
    }
  }
})
