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

  // Init BGM
  const bgm = new Audio('asset/bgm.mp3')
  bgm.load()
  bgm.addEventListener('canplay', () => {
    console.log('canplay')
    $('#startBtn').removeAttr('disabled').text('PLAY').click(init)
  })

  function init() {
    // Switch elements
    $('#showArea').show()
    $('#beforeArea').hide()

    // Start BGM
    bgm.play()

    // Set Timer
    const startTime = new Date().getTime()
    const $timer = $('<div>', { title: 'Debug Timer', id: 'debugTimer' })
    $timer.appendTo('footer')
    setInterval(() => {
      let now = new Date().getTime()
      let timePassed = now - startTime
      $timer.text(`${(timePassed / 1000).toFixed(2)} s`)
    }, 50)

    // Set Character
    let $charaArea = $('#charaArea')
    $charaArea.find('#chara1').show()
  }
})(window, jQuery)
