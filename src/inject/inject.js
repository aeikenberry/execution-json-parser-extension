// chrome.extension.sendMessage({}, function (response) {
//   var readyStateCheckInterval = setInterval(function () {
//     if (document.readyState === 'complete') {
//       clearInterval(readyStateCheckInterval)

//       console.log('Loading AWSNice')

//       setInterval(function () {
//         doNice()
//       }, 2000)
//     }
//   }, 10)
// })

console.log('Loading JSON Parser')

setInterval(function () {
  doNice()
}, 2000)

function doNice () {
  fancyRows()
  // fancyTabPanels()
}

function fancyTabPanels () {
  $('.tabpanel').each(function (i, e) {
    let json
    let pre = $(this).find('pre')
    let preHmtl = $(pre).html()
    if (!preHmtl) return

    try {
      json = JSON.parse(preHmtl)
    } catch (e) {
      return
    }

    $(pre).jsonViewer(json, {
      collapsed: false,
      withoutQuotes: true
    })
  })
}

function fancyRows () {
  $('pre').each(function (i, e) {
    let json
    let pre = $(this)
    let preHmtl = $(pre).html()
    if (!preHmtl) return

    try {
      json = JSON.parse(preHmtl)
    } catch (e) {
      return
    }
    $(pre).jsonViewer(json, {
      collapsed: false,
      withoutQuotes: true
    })
  })
}
