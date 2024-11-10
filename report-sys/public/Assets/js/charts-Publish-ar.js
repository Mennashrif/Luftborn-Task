

/* chart.js chart examples */

// chart colors
var colors = ['#98df8a', '#da5ba8', '#539fd9', '#f1b24e', '#52d3d6', '#4a736f'];

/* إحصائية عدد التقارير المنشورة بالنسبة للإدارات */
var chLine40 = document.getElementById("chLine40");
var chartData40 = {
    labels: ["المالية", "شئون العاملين", "الأجازات", "الشئون القانونية", "مركز المعلومات", "GIS"],
    datasets: [{
        data: [120, 82, 100, 110, 65, 85],
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
if (chLine40) {
    new Chart(chLine40, {
        type: 'line',
        data: chartData40,
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


/* إحصائية عدد التقارير بالنسبة لآلية النشر */
var chBar40 = document.getElementById("chBar40");
if (chBar40) {
    new Chart(chBar40, {
        type: 'bar',
        data: {
            labels: [" نشر كبيانات", "نشر كتقرير"],
            datasets: [{
                data: [120, 210],
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
var donutOptions40 = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};
var chDonutData40 = {
    labels: ["نشط", "غير نشط"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [220, 50]
        }
    ]
};
var chDonut40 = document.getElementById("chDonut40");
if (chDonut40) {
    new Chart(chDonut40, {
        type: 'pie',
        data: chDonutData40,
        options: donutOptions40
    });
}


/* إحصائية عدد المستفيدين بالنسبة للتقارير */
var chLine41 = document.getElementById("chLine41");
var chartData41 = {
    labels: ["تقرير 1", "تقرير 2", "تقرير 3", "تقرير 4", "تقرير 5", "تقرير 6"],
    datasets: [{
        data: [10, 15, 12, 35, 65, 24],
        //orange color
        backgroundColor: "rgba(83, 159, 217, 0.5)",
        backgroundOpacity: .7,
        borderWidth: 2,
        borderColor: colors[6]
    }
        //     backgroundColor: colors[3],
        //     pointBackgroundColor: colors[1]
    ]
};
if (chLine41) {
    new Chart(chLine41, {
        type: 'line',
        data: chartData41,
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

/* إحصائية عدد المشاهدات بالنسبة للتقارير */
var chBar41 = document.getElementById("chBar41");
if (chBar41) {
    new Chart(chBar41, {
        type: 'bar',
        data: {
            labels: ["تقرير 1", "تقرير 2", "تقرير 3", "تقرير 4", "تقرير 5", "تقرير 6"],
            datasets: [{
                data: [50, 85, 60, 35, 65, 24],
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








