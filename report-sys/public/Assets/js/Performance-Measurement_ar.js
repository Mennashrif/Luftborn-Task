

/* chart.js chart examples */

// chart colors
var colors = ['#d9534f', '#5cb85c', '#5bc0de', '#f0ad4e', '#d9534f', '#5cb85c', '#5bc0de', '#f0ad4e', '#0274b3', '#474949'];

/* إحصائية المؤشر الزمنى */
var chLine = document.getElementById("chLine");
var chartData = {
    labels: ["1/2021", "2/2021", "3/2021", " 4/2021", "5/2021", "6/2021", "7/2021", "8/2021", "9/2021", "10/2021", "11/2021", "12/2021"],
    datasets: [{
        data: [30, 50, 95, 35, 75, 65, 57, 98, 43, 72, 65, 22],
        //orange color
        backgroundColor: "rgba(241, 178, 78, 0.5)",
        backgroundOpacity: .7,
        borderWidth: 2,
        borderColor: colors[12]
    }
        //     backgroundColor: colors[3],
        //     pointBackgroundColor: colors[1]
    ]
};
if (chLine) {
    new Chart(chLine, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontStyle: "bold"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12,
                        fontStyle: "bold"
                    }
                }]
            },
            legend: {
                display: false,
            },
            responsive: true
        }
    });
}


/* الإحصائية العامة */
var chBar = document.getElementById("chBar");
if (chBar) {
    new Chart(chBar, {
        type: 'bar',
        data: {
            labels: ["العلاج بخط الزمن ", "التنويم الإيحائي", "تدريب المتدربين", "التعلم السريع", "الحاسب الآلي", "التفكير الإبداعى", "الماليات", "التعليم الفنى", "البرمجة"],
            datasets: [{
                data: [10, 50, 30, 40, 70, 60, 70, 60, 30, 100],
                backgroundColor: colors.slice(0, 10),
                borderWidth: 0,
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.6,
                    ticks: {
                        fontSize: 13,
                        fontStyle: "bold"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12,
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}



