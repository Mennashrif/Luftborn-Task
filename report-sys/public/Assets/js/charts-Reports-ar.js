

/* chart.js chart examples */

// chart colors
var colors = ['#98df8a', '#da5ba8', '#539fd9', '#f1b24e', '#52d3d6', '#474949'];

/* إحصائية أنواع التقارير */
var chLine = document.getElementById("chLine");
var chartData = {
    labels: ["PDF", "Word", "Dashboard", "Excel", "Power Point"],
    datasets: [{
        data: [450, 720, 325, 254, 321],
        //orange color
        backgroundColor: "rgba(241, 178, 78, 0.5)",
        backgroundOpacity: .7,
        borderWidth:2,
        borderColor: colors[5]
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

/* إحصائية التقارير بالنسبة للتعليقات */
var chLine2 = document.getElementById("chLine2");
var chartData2 = {
    labels: ["تقرير تحليل النظم", "تقرير الحضور والإنصراف", "تقرير مؤشر التقييم", "تقرير المالية2020", "تقرير بيان الإنضباط"],
    datasets: [{
        data: [320, 250, 198, 350, 420],
         //blue color
         backgroundColor: "rgba(83, 159, 217, 0.5)",
        borderWidth:2,
        borderColor: colors[5]
    }
          //     backgroundColor: colors[3],
          //     pointBackgroundColor: colors[1]
    ]
};
if (chLine2) {
    new Chart(chLine2, {
        type: 'line',
        data: chartData2,
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
                        fontStyle: "bold"
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

/* إحصائية التقارير للبلاغات */
var chLine3 = document.getElementById("chLine3");
var chartData3 = {
    labels: ["تقرير تحليل النظم", "تقرير الحضور والإنصراف", "تقرير مؤشر التقييم", "تقرير المالية2020", "تقرير بيان الإنضباط"],
    datasets: [{
        data: [60, 50, 65, 70, 89],
         //panfsg color
         backgroundColor: "rgba(218, 91, 168, 0.5)",
        borderWidth:2,
        borderColor: colors[5]
    }
          // backgroundColor: colors.slice(0, 4),
          //     backgroundColor: colors[3],
          //     pointBackgroundColor: colors[1]
    ]
};
if (chLine3) {
    new Chart(chLine3, {
        type: 'line',
        data: chartData3,
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

/* إحصائية التقارير بالنسبة للمشاهدة */
var chLine4 = document.getElementById("chLine4");
var chartData4 = {
    labels: ["تقرير تحليل النظم", "تقرير الحضور والإنصراف", "تقرير مؤشر التقييم", "تقرير المالية2020", "تقرير بيان الإنضباط"],
    datasets: [{
        data: [40, 75, 75, 60, 90],
       //Light-blue color
         backgroundColor: "rgba(82, 211, 214, 0.5)",
        borderWidth:2,
        borderColor: colors[5]
    }
        //     backgroundColor: colors[3],
        //     pointBackgroundColor: colors[1]
    ]
};
if (chLine4) {
    new Chart(chLine4, {
        type: 'line',
        data: chartData4,
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

/* إحصائية التقارير الأفضل تقييم */
var chLine5 = document.getElementById("chLine5");
var chartData5 = {
    labels: ["تقرير تحليل النظم", "تقرير الحضور والإنصراف", "تقرير مؤشر التقييم", "تقرير المالية2020", "تقرير بيان الإنضباط", "تقرير منتج"],
    datasets: [{
        data: [95, 90, 85, 75, 92, 65],
        //orange color
        backgroundColor: "rgba(203, 235, 126, 0.5)",
        backgroundOpacity: .7,
        borderWidth: 2,
        borderColor: colors[5]
    }
        //     backgroundColor: colors[3],
        //     pointBackgroundColor: colors[1]
    ]
};
if (chLine5) {
    new Chart(chLine5, {
        type: 'line',
        data: chartData5,
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

/* إحصائية التقارير فى الإدارات */
var chBar = document.getElementById("chBar");
if (chBar) {
    new Chart(chBar, {
        type: 'bar',
        data: {
            labels: ["إدارة المالية", "إدارة التشغيل", "إدارة GIS", "إدارة الصيانة", "إدارة العاملين"],
            datasets: [{
                data: [200, 325, 350, 158, 420],
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

/* إحصائية التقارير بالنسة للتحميلات */
var chBar2 = document.getElementById("chBar2");
if (chBar2) {
    new Chart(chBar2, {
        type: 'bar',
        data: {
            labels: ["تقرير تحليل النظم", "تقرير الحضور والإنصراف", "تقرير مؤشر التقييم", "تقرير المالية2020", "تقرير بيان الإنضباط"],
            datasets: [{
                data: [15, 20, 25, 13, 14],
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

/* إحصائية التقارير بالنسبة للتقييم */
var chBar3 = document.getElementById("chBar3");
if (chBar3) {
    new Chart(chBar3, {
        type: 'bar',
        data: {
            labels: ["تقرير تحليل النظم", "تقرير الحضور والإنصراف", "تقرير مؤشر التقييم", "تقرير المالية2020", "تقرير بيان الإنضباط"],
            datasets: [{
                data: [5, 3, 5, 2, 5],
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


/* إحصائية التقارير فى الأعجابات وغير الإعجابات */
var donutOptions = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};
// donut 1
var chDonutData1 = {
    labels: ["إعجابات", "غير الإعجابات"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [ 750, 500]
        }
    ]
};
var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
    });
}


/* إحصائية المستخدمين الأكثر تفاعلا */
var donutOptions2 = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};
// donut 2
var chDonutData2 = {
    labels: ["عبدالرحمن على", "محمد على", "علياء محمد"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [95, 75, 40]
        }
    ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions2
    });
}
