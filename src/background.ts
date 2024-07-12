import { Storage } from "@plasmohq/storage"

const storage = new Storage({ area: "local" })

// XのURLから寿司打のスコアを抽出して保存する
try {
  chrome.webNavigation.onCompleted.addListener(async (details) => {
    const { tabId, url } = details

    if (url.indexOf("https://x.com/") > -1) {
      const decodeUrl = decodeURIComponent(url).replace(/,/g, "")
      const results = decodeUrl
        .match(/\d+(\.\d+)?/g)
        .map((result) => parseFloat(result))

      if (results.length === 4) {
        await storage.set(tabId.toString(), {
          course: results[0],
          miss: results[3],
          rate: results[2],
          score: results[1]
        })
      } else {
        await storage.set(tabId.toString(), {
          course: results[0],
          miss: results[5],
          rate: results[4],
          score: results[3]
        })
      }
      const data = await chrome.storage.local.get(null)
      console.log(data)
    }
  })
} catch (error) {
  console.error(error)
}

// 拡張機能のアイコンがクリックされたときに指定のページを開く
try {
  chrome.action.onClicked.addListener(async () => {
    chrome.tabs.create({
      url: "chrome-extension://plolmhakkepfofnfjnhaeohfhoicojha/tabs/index.html"
    })
  })
} catch (error) {
  console.error(error)
}
