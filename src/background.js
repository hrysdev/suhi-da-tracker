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
  var tabTitle = decodeURIComponent(changeInfo.title);
  if (tabTitle !== undefined && tabTitle.indexOf("twitter.com/") > -1) {
    var score = tabTitle.match(/★(\d,\d+)/)[1];
    var speed = tabTitle.match(/速度：(\d+.\d+)/)[1];
    var miss = tabTitle.match(/ミス：(\d+)/)[1];
    var course = tabTitle.match(/(\d,\d+)円コース/)[1];
    console.log(score, speed, miss, course);
  }

  // if (tabTitle.search(\https://twitter.com/*寿司打\g) > -1) {
  //   console.log("hoge");
  // }
  // if (changeInfo.title.indexOf("https://twitter.com/") > -1) {
  //   console.log(changeInfo.title);
  // }
  // if (tabTitle.indexOf("https://twitter.com/") > -1) {
  //   // let url = decodeURIComponent(tab.url);
  //   console.log(tab);
  // }
  //   // ページのURLを取得
  //   // // URLからリザルト結果を抽出
});
