chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      console.log('Loading AWSNice')

      setInterval(function () {
        doNice()
      }, 2000)
    }
  }, 10)
})

function doNice () {
  $('tr.tbl-expand-row').each(function (i, e) {
    let json
    let pre = $(this).find('pre')
    let preHmtl = $(pre).html()
    if (!preHmtl) return

    try {
      json = JSON.parse(preHmtl)
    } catch (e) {
      return
    }
    let subtitle = json.name || json.resource
    if (subtitle) {
      let parent = $(pre).parents('td')
      parent.append('<span style="font-weight:bold">' + subtitle + '</span>')
    }

    $(pre).jsonViewer(json, {
      collapsed: false,
      withoutQuotes: true
    })
  })
}
