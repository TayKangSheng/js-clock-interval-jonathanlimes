document.addEventListener('DOMContentLoaded', function () {
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var second = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  clock.appendChild(minute)
  clock.appendChild(second)

  function tick (hand) {
    if (hand === second || hand === minute) {
      hand.style.transform = 'rotate(' + secondMinRotation(1) + 'deg)'
    } else if (hand === hour) {
      hand.style.transform = 'rotate(' + degrees + 'deg)'
    }
  }

  // set counter,
  var secondCount = 0
  // every 1000ms,
  setInterval(tickSecond, 1000)
  // run tick function which will rotate the sec hand
  function tickSecond () {
    secondCount++
    second.style.transform = 'rotate(' + secondMinRotation(secondCount) + 'deg)'
    if (secondCount === 60) {
      secondCount = 0
    }
  }

  var minuteCount = 0
  setInterval(tickMinute, 1000 * 60)
  function tickMinute () {
    minuteCount++
    minute.style.transform = 'rotate(' + secondMinRotation(minuteCount) + 'deg)'
    if (minuteCount === 60) {
      minuteCount = 0
    }
  }

  var hourCount = 0
  setInterval(tickHour, 1000 * 60 * 60)
  function tickHour () {
    hourCount++
    hour.style.transform = 'rotate(' + hourRotation(hourCount) + 'deg)'
    if (hourCount === 12) {
      hourCount = 0
    }
  }

  function secondMinRotation (num) {
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
})
