
var radarChart = echarts.init(document.getElementById('radar'),'chalk');
radarData = {
    "手足口病":[
        [
            8478527,
            89436,
            10998,
            8074,
            1468,
            497,
            329,
            163,
            63
        ],
        [
            5237829,
            62207,
            16639,
            7498,
            958,
            515,
            243,
            88,
            46
        ]
    ],
    "流行性感冒":[
        [
            255000,
            143456,
            67485,
            63068,
            56831,
            44783,
            33545,
            15793,
            4896
        ],
        [
            172131,
            103728,
            58941,
            42804,
            37313,
            35556,
            25531,
            11577,
            3996
        ]
    ],
    "登革热":[
        [
            1306,
            2642,
            6489,
            5544,
            5127,
            3490,
            2522,
            1438,
            617
        ],
        [
            1044,
            1756,
            6026,
            5577,
            5353,
            4354,
            2935,
            1547,
            666
        ]
    ]
}

option1 = {
    title: {
        text: '年龄分段雷达图'
    },
    tooltip: {},
    legend: {
        // data: [' 登革热', '流行性感冒', '手足口病']
        data: ['男','女'],
        left:10,
        top:30,
    },
    legend1: {
        // data: [' 登革热', '流行性感冒', '手足口病']
        data: ['男','女'],
        // bottom:10,
        // data: [' 登革热', '流行性感冒', '手足口病']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                // backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            },
        },
        indicator: [{
            name: '0-10岁',
            max: 6500
        },
        {
            name: '10-20岁',
            max: 6500
        },
        {
            name: '20-30岁',
            max: 6500
        },
        {
            name: '30-40岁',
            max: 6500
        },
        {
            name: '40-50岁',
            max: 6500
        },
        {
            name: '50-60岁',
            max: 6500
        }, {
            name: '60-70岁',
            max: 6500
        },
        {
            name: '70-80岁',
            max: 6500
        },
        {
            name: '80以上',
            max: 6500
        }]
    },
    series: [{
        name: ' ',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
                value: radarData.登革热[0],
                name: '男'
            },
            {
                value: radarData.登革热[1],
                name: '女'
            }
        ]
    }]
};

radarChart.setOption(option1)

$('#lei1').click(function(){
    $("#circle li").css('background',"");
    $("#lei1").css('background',"#D48265");
    radarChart.setOption({
        radar: {
            indicator: [{
                    name: '0-10岁',
                    max: 6500
                },
                {
                    name: '10-20岁',
                    max: 6500
                },
                {
                    name: '20-30岁',
                    max: 6500
                },
                {
                    name: '30-40岁',
                    max: 6500
                },
                {
                    name: '40-50岁',
                    max: 6500
                },
                {
                    name: '50-60岁',
                    max: 6500
                }, {
                    name: '60-70岁',
                    max: 6500
                },
                {
                    name: '70-80岁',
                    max: 6500
                },
                {
                    name: '80以上',
                    max: 6500
                }]
        },
        series: [{
            name: ' ',
            type: 'radar',
            data: [{
                    value: radarData.登革热[0],
                    name: '男'
                },
                {
                    value: radarData.登革热[1],
                    name: '女'
                }
        ]
        }]
    });
})
$('#lei2').click(function(){
    $("#circle li").css('background',"");
    $("#lei2").css('background',"#D48265");
    radarChart.setOption({
        radar: {
            indicator: [{
                    name: '0-10岁',
                    max: 255000
                },
                {
                    name: '10-20岁',
                    max: 255000
                },
                {
                    name: '20-30岁',
                    max: 255000
                },
                {
                    name: '30-40岁',
                    max: 255000
                },
                {
                    name: '40-50岁',
                    max: 255000
                },
                {
                    name: '50-60岁',
                    max: 255000
                }, {
                    name: '60-70岁',
                    max: 255000
                },
                {
                    name: '70-80岁',
                    max: 255000
                },
                {
                    name: '80以上',
                    max: 255000
                }]
        },
        series: [{
            name: ' ',
            type: 'radar',
            data: [{
                    value: radarData.流行性感冒[0],
                    name: '男'
                },
                {
                    value: radarData.流行性感冒[1],
                    name: '女'
                }
        ]
        }]
    });
})
$('#lei3').click(function(){
    $("#circle li").css('background',"");
    $("#lei3").css('background',"#D48265");
    radarChart.setOption({
        radar: {
            indicator: [{
                    name: '0-10岁',
                    max: 8478600
                },
                {
                    name: '10-20岁',
                    max: 8478600
                },
                {
                    name: '20-30岁',
                    max: 8478600
                },
                {
                    name: '30-40岁',
                    max: 8478600
                },
                {
                    name: '40-50岁',
                    max: 8478600
                },
                {
                    name: '50-60岁',
                    max: 8478600
                }, {
                    name: '60-70岁',
                    max: 8478600
                },
                {
                    name: '70-80岁',
                    max: 8478600
                },
                {
                    name: '80以上',
                    max: 8478600
                },
                ]
        },
        series: [{
            name: ' ',
            type: 'radar',
            data: [{
                    value: radarData.手足口病[0],
                    name: '男'
                },
                {
                    value: radarData.手足口病[1],
                    name: '女'
                }
        ]
        }]
    });
})


