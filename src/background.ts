import { OverPayment } from "./overPayment";

// chrome.storage.local.clear();

function matchOrZero(input: string, regex: RegExp): number {
  const matchResult = input.match(regex);
  return matchResult ? Number(matchResult[1]) : 0;
}

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.indexOf("https://x.com/") > -1) {
    const url = decodeURIComponent(details.url).replaceAll(",", "");

    const overPaymentRegex = /★(\d+)円/;
    const overPayment = new OverPayment(matchOrZero(url, overPaymentRegex));

    const speedRegex = /速度：(\d+.\d+)/;
    const speed = matchOrZero(url, speedRegex);

    // const miss = url.match(/ミス：(\d+)/)?.[1];
    // const course = url.match(/(\d+)円コース/)?.[1];

    const date = new Date();
    console.log(date);

    const key = details.tabId.toString();
    const value = {
      score: overPayment.amount,
      speed: speed,
      date: date,
    };

    chrome.storage.local.set({ [key]: value }, () => {
      console.log("Value is set");
    });

    chrome.storage.local.get(null, (result) => {
      console.log(result);
    });
  }
});

chrome.action.onClicked.addListener(() => {
  // prettier-ignore
  chrome.tabs.create({ "url": "src/index.html" });
});
