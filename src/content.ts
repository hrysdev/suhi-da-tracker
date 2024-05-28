import { Chart } from "chart.js";

console.log(Chart);

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
});

// const ctx = <HTMLCanvasElement>document.getElementById("myChart");

// if (ctx) {
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// }
