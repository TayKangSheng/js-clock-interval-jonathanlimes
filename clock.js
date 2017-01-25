function clock () {
  var hourHand = document.querySelector('#hour')
  var clock = document.querySelector('#clock')
  var secondHand = document.querySelector('#second')
  var minuteHand = document.querySelector('#minute')
  clock.appendChild(minuteHand)
  clock.appendChild(secondHand)

  function secondHandRotate (secs) {
    return secs * (360 / 60)
  }
  function minuteHandRotate (mins, secs) {
    return mins * (360 / 60) + secs * (360 / 60 / 60)
  }
  function hourHandRotate (hrs, mins, secs) {
    return hrs * (360 / 12) + mins * (360 / 12 / 60) + secs * (360 / 12 / 60 / 60)
  }

  function rotateAllHands () {
    var now = new Date()
    var currentHour = now.getHours()
    var currentMinute = now.getMinutes()
    var currentSecond = now.getSeconds()

    var secDegs = secondHandRotate(currentSecond)
    var minDegs = minuteHandRotate(currentMinute, currentSecond)
    var hourDegs = hourHandRotate(currentHour, currentMinute, currentSecond)

    secondHand.style.transform = 'rotate(' + secDegs + 'deg)'
    secondHand.style.transition = 'transform 0.2s cubic-bezier(.5,2.08,.55,.44)'
    minuteHand.style.transform = 'rotate(' + minDegs + 'deg)'
    hourHand.style.transform = 'rotate(' + hourDegs + 'deg)'
  }

  return {
    rotateAllHands: rotateAllHands,
    secondHandRotate: secondHandRotate,
    minuteHandRotate: minuteHandRotate,
    hourHandRotate: hourHandRotate
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var thisClock = clock()
  setInterval(thisClock.rotateAllHands, 1000)
})
