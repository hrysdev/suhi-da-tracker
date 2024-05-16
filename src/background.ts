// https://twitter.com/*%E5%AF%BF%E5%8F%B8%E6%89%93

class GameScore {
  private url: string;

  constructor(url: string) {
    if(typeof url !== "string") {
      throw new Error;
    }

    this.url = url;
  }

  public function extractScore(url: string): void {
    console.log(url.match(/★(\d,\d+)円/));
  }
}

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.indexOf("https://twitter.com/") > -1) {
    const url = decodeURIComponent(details.url);

    try {
      const score = url.match(/★(\d,\d+)円/)[1];
      const speed = url.match(/速度：(\d+.\d+)/)[1];
      const miss = url.match(/ミス：(\d+)/)[1];
      const course = url.match(/(\d,\d+)円コース/)[1];

      console.log(details.tabId, score, speed, miss, course);
    } catch {
      throw new Error();
    }

    // const key = details.tabId.toString();
    // const value = score;

    // chrome.storage.local.clear();

    // chrome.storage.local.set({ [key]: value }, () => {
    //   console.log("Value is set");
    // });

    // chrome.storage.local.get(null, (result) => {
    //   console.log(result);
    // });
  }
});

chrome.action.onClicked.addListener(() => {
  // prettier-ignore
  chrome.tabs.create({ "url": "src/index.html" });
});
