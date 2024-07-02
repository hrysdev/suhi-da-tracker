import { storage } from "@extend-chrome/storage";

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "../../index.html" });
});

chrome.webNavigation.onCompleted.addListener((details) => {
  const { url, tabId } = details;

  if (url.indexOf("https://x.com/") > -1) {
    const decodeUrI = decodeURIComponent(url).replace(/,/g, "");
    const level = decodeUrI.match(/【.+】/g)!;
    const results = decodeUrI
      .match(/\d+(\.\d+)?/g)!
      .map((result) => parseFloat(result));

    console.log(results);

    if (decodeUrI.indexOf("損でした…") > -1) results[1] = -results[1];

    if (results.length === 4) {
      storage.local.set({
        [tabId]: {
          level: level[0],
          course: results[0],
          score: results[1],
          rate: results[2],
          miss: results[3],
        },
      });
    } else {
      storage.local.set({
        [tabId]: {
          level: level[0],
          course: results[0],
          score: results[3],
          rate: results[4],
          miss: results[5],
        },
      });
    }
  }
});
