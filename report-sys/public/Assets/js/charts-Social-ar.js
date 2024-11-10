

/* chart.js chart examples */

// chart colors
var colors = ['#98df8a', '#da5ba8', '#539fd9', '#f1b24e', '#52d3d6', '#474949'];

/* إحصائية عدد التعليقات للمشاركات */
var chLine11 = document.getElementById("chLine11");
var chartData11 = {
    labels: ["مشاركة 1", "مشاركة 2", "مشاركة 3", "مشاركة4 ", "مشاركة 5"],
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
if (chLine11) {
    new Chart(chLine11, {
        type: 'line',
        data: chartData11,
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


/* إحصائية أكثر المشاركات تفاعلا*/
var chLine10 = document.getElementById("chLine10");
var chartData10 = {
    labels: ["مشاركة 1", "مشاركة 2", "مشاركة 3", "مشاركة4 ", "مشاركة 5", "مشاركة 6", "مشاركة 7"],
    datasets: [{
        data: [70, 95, 86, 75, 98, 65, 68],
         //blue color
         backgroundColor: "rgba(83, 159, 217, 0.5)",
        borderWidth:2,
        borderColor: colors[5]
    }
          //     backgroundColor: colors[3],
          //     pointBackgroundColor: colors[1]
    ]
};
if (chLine10) {
    new Chart(chLine10, {
        type: 'line',
        data: chartData10,
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

/* إحصائية عدد المشاركات للإدارات */
var chBar10 = document.getElementById("chBar10");
if (chBar10) {
    new Chart(chBar10, {
        type: 'bar',
        data: {
            labels: ["المالية", "شئون العاملين", "الأجازات", "الشئون القانونية", "مركز المعلومات"],
            datasets: [{
                data: [520, 325, 350, 158, 420],
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

/* إحصائية الإعجابات وغير الإعجابات*/
var donutOptions10 = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};

// donut 10
var chDonutData10 = {
    labels: ["إعجابات", "غير إعجابات"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [ 1500, 500 ]
        }
    ]
};

var chDonut10 = document.getElementById("chDonut10");
if (chDonut10) {
    new Chart(chDonut10, {
        type: 'pie',
        data: chDonutData10,
        options: donutOptions10
    });
}

// donut 11 الطلبات
var donutOptions11 = {
    cutoutPercentage: 45,
    legend: { position: 'right', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};
var chDonutData11 = {
    labels: ["صادر", "وارد"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 5),
            borderWidth: 0,
            data: [1500, 500]
        }
    ]
};

var chDonut11 = document.getElementById("chDonut11");
if (chDonut11) {
    new Chart(chDonut11, {
        type: 'pie',
        data: chDonutData11,
        options: donutOptions11
    });
}

/* إحصائية النشر */
var chLine13 = document.getElementById("chLine13");
var chartData13 = {
    labels: ["نشر كبيانات", "نشر كتقرير"],
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
if (chLine13) {
    new Chart(chLine13, {
        type: 'line',
        data: chartData13,
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