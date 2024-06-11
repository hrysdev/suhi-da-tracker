chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "../index.html" });
});

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.indexOf("https://x.com/") > -1) {
    const xUrl = decodeURIComponent(details.url).replace(/,/g, "");

    const values = xUrl.match(/\d+/g)!;
    for (const value of values) {
      console.log(value);
    }
  }
});
