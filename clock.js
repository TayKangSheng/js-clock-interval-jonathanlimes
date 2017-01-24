document.addEventListener('DOMContentLoaded', function () {
  var hour = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var second = document.querySelector('#second')
  var minute = document.querySelector('#minute')
  clock.appendChild(minute)
  clock.appendChild(second)

  function tick (hand) {
    if (hand === second || hand === minute) {
      hand.style.transform = 'rotate(6 deg)'
    } else if (hand === hour) {
      hand.style.transform = 'rotate(30 deg)'
    }
  }

  var tickSecond = setInterval(tick(second), 1000)
  var tickMinute = setInterval(tick(minute), 1000 * 60)
  var tickHour = setInterval(tick(hour), 1000 * 60 * 60)

  function secondRotation (num) {
    if (num === 60) {
      return 0
    } else {
      return (num / 12) * 360
    }
  }

  function minuteRotation (num) {
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
