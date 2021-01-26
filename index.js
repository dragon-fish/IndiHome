// Import html
import html from './index.html'

// Import styles
import './static/style.styl'

// Music
// import music from './public/asset/bgm.mp3'

// Main
!((window, $) => {
  // Set HTML
  $('#app').html('').append(html)

  // Start button
  const bgm = new Audio('asset/bgm.mp3')
  bgm.addEventListener('canplay', () => {
    console.log('canplay')
    $('#startBtn').removeAttr('disabled').text('PLAY').click(init)
  })

  function init() {
    // Switch elements
    $('#showArea').show()
    $('#beforeArea').hide()

    // init bgm
    bgm.load()
    bgm.play()

    // Set Timer
    window.showTime = 0
    setInterval(function () {
      window.showTime += 10
    }, 10)
    const $timer = $('<div>', { title: 'Debug Timer', id: 'debugTimer' })
    $timer.appendTo('footer')
    setInterval(() => {
      $timer.text(`${(window.showTime / 1000).toFixed(2)} s`)
    }, 50)

    // Set Character
    let $charaArea = $('#charaArea')
    $charaArea.find('#chara1').show()
  }
})(window, jQuery)
