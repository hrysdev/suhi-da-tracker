// https://twitter.com/*%E5%AF%BF%E5%8F%B8%E6%89%93

// class SushidaResult {
//   constructor(score, speed, typo, course) {
//     this.score = score;
//     this.speed = speed;
//     this.typo = typo;
//     this.course = course;
//   }
// }

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.indexOf("https://twitter.com/") > -1) {
    // // ページのURLを取得
    // const url = decodeURIComponent(tab.url);
    // console.log(url);

    // // URLからリザルト結果を抽出
    // const score = url.match(/★(\d,\d+)/)[1];
    // const speed = url.match(/速度：(\d+.\d+)/)[1];
    // const typo = url.match(/ミス：(\d+)/)[1];
    // const course = url.match(/(\d,\d+)円コース/)[1];
    // console.log(score, speed, typo, course);
  }
});
