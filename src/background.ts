function getCurrentDate(): string {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();

  const paddedMonth: string = month.toString().padStart(2, "0");
  const paddedDate: string = date.toString().padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDate}`;
}

function getMatchOrZero(input: string, regex: RegExp): number {
  const matchResult = input.match(regex);
  return matchResult ? Number(matchResult[1]) : 0;
}

chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.indexOf("https://x.com/") > -1) {
    const url = decodeURIComponent(details.url).replaceAll(",", "");

    console.log(getCurrentDate());

    const overPaymentRegex = /★(\d+)円/;
    const overPayment = getMatchOrZero(url, overPaymentRegex);

    const speedRegex = /速度：(\d+.\d+)/;
    const speed = getMatchOrZero(url, speedRegex);

    // const miss = url.match(/ミス：(\d+)/)?.[1];
    // const course = url.match(/(\d+)円コース/)?.[1];

    const key = details.tabId.toString();
    const value = {
      score: overPayment,
      speed: speed,
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
  chrome.tabs.create({ url: "src/index.html" });
});

// chrome.storage.local.clear();
