// https://twitter.com/*%E5%AF%BF%E5%8F%B8%E6%89%93

// class SushidaResult {
//   constructor(score, speed, typo, course) {
//     this.score = score;
//     this.speed = speed;
//     this.typo = typo;
//     this.course = course;
//   }
// }

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.indexOf("https://twitter.com/") > -1) {
    var url = decodeURIComponent(details.url);

    var score = url.match(/★(\d,\d+)円/)[1];
    var speed = url.match(/速度：(\d+.\d+)/)[1];
    var miss = url.match(/ミス：(\d+)/)[1];
    var course = url.match(/(\d,\d+)円コース/)[1];

    console.log(details.tabId, score, speed, miss, course);

    var key = details.tabId.toString();
    var value = score;

    // chrome.storage.local.clear();

    // chrome.storage.local.set({ [key]: value }, () => {
    //   console.log("Value is set");
    // });

    chrome.storage.local.get(null, (result) => {
      console.log(result);
    });
  }
});

chrome.action.onClicked.addListener(() => {
  // prettier-ignore
  chrome.tabs.create({ "url": "src/index.html" });
});
