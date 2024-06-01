import Chart from "chart.js/auto";

const dummyData = {
  1: { score: "3000", speed: "4.1", date: "2024-01-01" },
  2: { score: "3200", speed: "4.2", date: "2024-01-02" },
  3: { score: "3500", speed: "4.3", date: "2024-01-03" },
  4: { score: "3900", speed: "4.4", date: "2024-01-04" },
  5: { score: "4400", speed: "4.5", date: "2024-01-05" },
};

type Item = {
  score: string;
  speed: string;
  date: string;
};

chrome.storage.local.get(null, (result) => {
  console.log(result);
  const values: Item[] = Object.values(dummyData);

  const ctx = document.getElementById("myChart") as HTMLCanvasElement;
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: values.map((item) => item.date),
        datasets: [
          {
            label: "chart label",
            data: values.map((item) => item.score),
          },
        ],
      },
    });
  }
});
