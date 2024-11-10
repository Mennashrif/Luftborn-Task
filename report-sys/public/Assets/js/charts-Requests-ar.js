

/* chart.js chart examples */

// chart colors
var colors = ['#98df8a', '#da5ba8', '#539fd9', '#f1b24e', '#52d3d6', '#474949'];

/* إحصائية عدد الطلبات بالنسبة للإدارات */
var chLine20 = document.getElementById("chLine20");
var chartData20 = {
    labels: ["المالية", "شئون العاملين", "الأجازات", "الشئون القانونية", "مركز المعلومات", "GIS"],
    datasets: [{
        data: [120, 20, 100, 110, 65, 85],
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
if (chLine20) {
    new Chart(chLine20, {
        type: 'line',
        data: chartData20,
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

/* إحصائية نوع الطلب */
var donutOptions20 = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};
var chDonutData20 = {
    labels: ["صادر", "وارد"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [100, 320]
        }
    ]
};
var chDonut20 = document.getElementById("chDonut20");
if (chDonut20) {
    new Chart(chDonut20, {
        type: 'pie',
        data: chDonutData20,
        options: donutOptions20
    });
}

/* إحصائية تصنيف الطلب بالنسبة للطلبات */
var chLine21 = document.getElementById("chLine21");
var chartData21 = {
    labels: ["ملكية", "عرض"],
    datasets: [{
        data: [40, 75],
        //Light-blue color
        backgroundColor: "rgba(82, 211, 214, 0.5)",
        borderWidth: 2,
        borderColor: colors[5]
    }
        //     backgroundColor: colors[3],
        //     pointBackgroundColor: colors[1]
    ]
};
if (chLine21) {
    new Chart(chLine21, {
        type: 'line',
        data: chartData21,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12,
                        fontStyle: "bold"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize: 12,
                        fontStyle: "bold",
                        max: 100,
                        min: 0
                    }
                }]
            },
            legend: {
                display: false
            },
            responsive: true
        }
    });
}

/* إحصائية حالة الطلبات */
var chBar20 = document.getElementById("chBar20");
if (chBar20) {
    new Chart(chBar20, {
        type: 'bar',
        data: {
            labels: ["تم الموافقة", "تم الرفض", "تحت الدراسة"],
            datasets: [{
                data: [120, 20, 45],
                backgroundColor: colors.slice(0, 5),
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







