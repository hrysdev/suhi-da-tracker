import Chart from "chart.js/auto";

const ctx = document.getElementById("myChart") as HTMLCanvasElement;

if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["data1", "data2", "data3"],
      datasets: [
        {
          label: "chart label",
          data: [1, 2, 3],
        },
      ],
    },
  });
}

chrome.storage.local.get(null, (result) => {
  console.log(result);
  chrome.runtime.sendMessage(result);
});
