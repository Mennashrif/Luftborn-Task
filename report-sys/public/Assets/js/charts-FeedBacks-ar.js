

/* chart.js chart examples */

// chart colors
var colors = ['#98df8a', '#da5ba8', '#539fd9', '#f1b24e', '#52d3d6', '#4a736f' ];

/* إحصائية عدد البلاغات بالنسبة للإدارات */
var chLine30 = document.getElementById("chLine30");
var chartData30 = {
    labels: ["المالية", "شئون العاملين", "الأجازات", "الشئون القانونية", "مركز المعلومات", "GIS"],
    datasets: [{
        data: [80, 20, 100, 110, 65, 85],
        //orange color
        backgroundColor: "rgba(241, 178, 78, 0.5)",
        backgroundOpacity: .7,
        borderWidth: 2,
        borderColor: colors[5]
    }
        //     backgroundColor: colors[3],
        //     pointBackgroundColor: colors[1]
    ]
};
if (chLine30) {
    new Chart(chLine30, {
        type: 'line',
        data: chartData30,
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


/* إحصائية عدد البلاغات بالنسبة للتقارير */
var chBar30 = document.getElementById("chBar30");
if (chBar30) {
    new Chart(chBar30, {
        type: 'bar',
        data: {
            labels: ["تقرير 1", "تقرير 2", "تقرير 3", "تقرير 4", "تقرير 5", "تقرير 6"],
            datasets: [{
                data: [63, 20, 45, 50, 60, 47],
                backgroundColor: colors.slice(0, 6),
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


/* إحصائية حالة النشر بالنسبة للتقارير */
var donutOptions30 = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};
var chDonutData30 = {
    labels: ["محمد على", "عبدالرحمن محمد", "علياء حسن"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [20, 50, 30]
        }
    ]
};
var chDonut30 = document.getElementById("chDonut30");
if (chDonut30) {
    new Chart(chDonut30, {
        type: 'pie',
        data: chDonutData30,
        options: donutOptions30
    });
}




