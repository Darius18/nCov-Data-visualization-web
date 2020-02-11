
    var dom = document.getElementById("polar");
    var polarChart = echarts.init(dom,'chalk');
    var app = {};
    // app.title = '极坐标系下的堆叠柱状图';
    
    polarData = [
        [
            "不详",
            "保育员及保姆",
            "公共场所服务员",
            "其它",
            "农民",
            "医务人员",
            "商业服务",
            "学生",
            "家务及待业",
            "工人",
            "干部职员",
            "幼托儿童",
            "教师",
            "散居儿童",
            "民工",
            "海员及长途驾驶员",
            "渔(船)民",
            "牧民",
            "离退人员",
            "餐饮食品业"
        ],
        {
            "流行性感冒":[
                35862,
                127,
                796,
                18127,
                321621,
                9435,
                11968,
                365927,
                36639,
                24422,
                19710,
                75287,
                6674,
                215054,
                5084,
                404,
                484,
                1765,
                22591,
                1663
            ],
            "登革热":[
                8565,
                68,
                127,
                2704,
                3759,
                500,
                7156,
                4450,
                12904,
                5458,
                2025,
                458,
                581,
                963,
                1118,
                16,
                45,
                3,
                7043,
                490
            ],
            "手足口病":[
                5634,
                133,
                238,
                9755,
                11393,
                976,
                4683,
                445426,
                11690,
                6309,
                5339,
                3164962,
                2238,
                10245091,
                646,
                47,
                32,
                87,
                358,
                544
            ]
        }
    ]
    
    option = {
        tooltip: {
		    trigger: 'axis',
		    axisPointer: {
		        type: 'cross'
		    },
		},
        angleAxis: {
        },
        radiusAxis: {
            type: 'category',
            data: polarData[0],
            z: 10,
            interval: 0, //此处关键， 设置文本标签全部显示
            axisLine:{                      //坐标 轴线
                show:true,                  //是否显示坐标轴轴线
                onZero:true,                //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
                
            },
            minInterval:0,    
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: polarData[1].登革热,
            coordinateSystem: 'polar',
            name: '登革热',
            stack: 'a'
        }, {
            type: 'bar',
            data: polarData[1].流行性感冒,
            coordinateSystem: 'polar',
            name: '流行性感冒',
            stack: 'a'
        }, {
            type: 'bar',
            data: polarData[1].手足口病,
            coordinateSystem: 'polar',
            name: '手足口病',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['登革热', '流行性感冒', '手足口病'],
            left:'10px',
            top:'30px',
            orient: 'vertical',
        }
    };
    ;
    if (option && typeof option === "object") {
        polarChart.setOption(option, true);
    }
