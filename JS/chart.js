
  const canvas = document.getElementById("cardioChart");
  const ctx = canvas.getContext("2d");

  // Create the chart
  const myChart = new Chart(ctx, {
    type: "line",
    // data: {
    //   labels: [
    //     "Transportation",
    //     "Shopping",
    //     "Food",
    //     "Housing",
    //     "Groceries",
    //     "Entertainment",
    //     "Health",
    //     "Utilities",
    //     "Other"
    //   ],
    //   datasets: [{
    //     label: "Cash Flow",
    //     data: [2000, 1500, 1800, 2200, 1600, 1900, 1700, 2100, 1300],
    //     borderColor: "#007bff",
    //     backgroundColor: "#007bff",
    //     tension: 0.4, // Creates smooth cardiogram curve
    //     pointRadius: 4,
    //     pointBackgroundColor: "#007bff",
    //     fill: false
    //   }]
    // },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false // Hides the chart label
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return "₹" + context.parsed.y;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return "₹" + value;
            }
          }
        }
      }
    }
  });
