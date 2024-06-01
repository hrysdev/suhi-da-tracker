import Chart from "chart.js/auto";

chrome.storage.local.get(null, (result) => {
  const keys: string[] = Object.keys(result);
  const values: string[] = Object.values(result);

  const ctx = document.getElementById("myChart") as HTMLCanvasElement;
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: keys,
        datasets: [
          {
            label: "chart label",
            data: values,
          },
        ],
      },
    });
  }
});
