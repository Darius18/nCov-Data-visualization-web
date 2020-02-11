
mapData = {
    "rate":[
        [
            "手足口病",
            0.6172618198108624,
            0.3827381801891377
            
        ],
        [
            "流行性感冒",
            0.5811464479710299,
            0.41885355202897007
        ],
        [
            "登革热",
            0.49928978488183046,
            0.5007102151181695
        ]
    ],
    "trend":[
        [
            "year",
            2005,
            2006,
            2007,
            2008,
            2009,
            2010,
            2011,
            2012,
            2013,
            2014,
            2015
        ],
        [
            "手足口病",
            6406,
            13630,
            83344,
            488955,
            1155525,
            1774669,
            1619706,
            2168737,
            1828377,
            2778861,
            1997371
        ],
        [
            "流行性感冒",
            45672,
            57557,
            36434,
            41692,
            198381,
            64502,
            66133,
            122140,
            129873,
            215533,
            195723
        ],
        [
            "登革热",
            40,
            1044,
            539,
            202,
            305,
            223,
            120,
            575,
            4663,
            46864,
            3858
        ]
    ]
}
        $(".svgMap path").click(
            function(){
                $(".spinner-box").css('display','grid');
                //alert($(this).attr("placeNum"));
                $(".svgMap path").css('fill',"");
                $(this).css("fill","blue");

            if($(this).attr("placeNum")!="none"){//如果不是台湾香港的话
                $.ajax({
                    type:"GET",
                  
                    url:"http://101.37.77.165:8080/Sharedcup_Disease/PlaceDiseaseServlet",

                    data:{
                        placenum:$(this).attr("placeNum")
                        
                    },
                    dataType:"json",
                    success:function(data){//请求成功，data为后台数据
                        console.log(data);
                        // alert("yes!");
                        $(".spinner-box").css('display','none');
                        mapData = data;


                        option = { 
                            legend: {},
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                },
                            },
                            dataset: {
                                source: [
                                    mapData.trend[0],mapData.trend[1],mapData.trend[2],mapData.trend[3]
                                    // ['year', '2012', '2013', '2014', '2015', '2016', '2017','2018', '20139', '2054', '25015', '20126', '20177'],
                                    // ['登革热', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                                    // ['流行性感冒', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1,86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                                    // ['手足口病', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5,24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                                ]
                            },
                            xAxis: {type: 'category'},
                            yAxis: {gridIndex: 0},
                            grid: {top: '50px'},
                            series: [
                                {type: 'line', smooth: true, seriesLayoutBy: 'row',areaStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                            {offset: 1, color: 'rgba(20,200,212,0)'}
                                        ]
                                    )
                                }},
                                {type: 'line', smooth: true, seriesLayoutBy: 'row',areaStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(83, 231, 198,0.5)'},
                                            {offset: 0.2, color: 'rgba(83, 231, 198,0.2)'},
                                            {offset: 1, color: 'rgba(83, 231, 198,0)'}
                                        ]
                                    )
                                }},
                                {type: 'line', smooth: true, seriesLayoutBy: 'row',areaStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(247, 243, 154,0.5)'},
                                            {offset: 0.2, color: 'rgba(247, 243, 154,0.2)'},
                                            {offset: 1, color: 'rgba(247, 243, 154,0)'}
                                        ]
                                    )
                                }},
                    
                            ]
                        };
                    
                    
                        curveChart.setOption(option);

                        $("#paneldata1").html(((((mapData.rate[1][1]+mapData.rate[2][1]+mapData.rate[0][1])/3)*100).toFixed(2))+'%')
                        $("#paneldata2").html((((mapData.rate[1][2]+mapData.rate[2][2]+mapData.rate[0][2])/3)*100).toFixed(2)+'%')
                        $("#paneldata3").html(mapData.trend[1][mapData.trend[1].length-1])
                        $("#comprehensive").html(mapData.trend[2][mapData.trend[2].length-1]+mapData.trend[1][mapData.trend[1].length-1]+mapData.trend[3][mapData.trend[3].length-1])

                    },
                    error:function(jqXHR){
                        alert("OOPS! 服务器出现了一个小问题："+jqXHR.status);
                        $(".spinner-box").css('display','none');
                    }
                })
            }else{
                alert("该地区暂无数据！");
                $(".spinner-box").css('display','none');
            }

        })


//////////////curve/////////////////////////////////////////////////////////////////////////////
var domCurve = document.getElementById("curve");
var curveChart = echarts.init(domCurve,'chalk');
option = null;

setTimeout(function () {

    option = { 
        legend: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
		        type: 'cross'
		    },
        },
        dataset: {
            source: [
                mapData.trend[0],mapData.trend[1],mapData.trend[2],mapData.trend[3]
                // ['year', '2012', '2013', '2014', '2015', '2016', '2017','2018', '20139', '2054', '25015', '20126', '20177'],
                // ['登革热', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                // ['流行性感冒', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1,86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                // ['手足口病', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5,24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {right:10,left:70},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row',areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(83, 231, 198,0.5)'},
                        {offset: 0.2, color: 'rgba(83, 231, 198,0.2)'},
                        {offset: 1, color: 'rgba(83, 231, 198,0)'}
                    ]
                )
            }},
            {type: 'line', smooth: true, seriesLayoutBy: 'row',areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(247, 243, 154,0.5)'},
                        {offset: 0.2, color: 'rgba(247, 243, 154,0.2)'},
                        {offset: 1, color: 'rgba(247, 243, 154,0)'}
                    ]
                )
            }},

        ]
    };


    curveChart.setOption(option);

});;
if (option && typeof option === "object") {
    curveChart.setOption(option, true);
}

//////////////curve/////////////////////////////////////////////////////////////////////////////




//////////////panel/////////////////////////////////////////////////////////////////////////////


    //右下角全国图的初始化
    $("#circle li").eq(0).css('background',"#D48265"); 


    //仪表盘的初始化
    $("#tabBarChart li").eq(0).css('background',"#14c8d4"); 



    var option1 = {
        backgroundColor: '',
        title: {
            x: 'center',
            y: '63%',
            bottom: 50,
            text: '登革热',
            subtext: 'Break-Bone Fever',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: "#0095ff"
            },
            subtextStyle: {
                fontWeight: 'normal',
                fontSize: 15,
                color: "#0095ff"
            }
        },
        tooltip: {
            format: function (params) {
                console.log(params);
            }
        },
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    image: "images/center.png",
                    width: 100,
                    height: 100
                },
                left: 'center',
                top: 'center'
            }]
        },
        series: [
            {
                splitNumber: 13, //刻度数量
                radius: '66%', //图表尺寸
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 10,
                        shadowBlur: 0,
                        color: [
                            [1, 'black']
                        ]
                    }
                },
                splitLine: {
                    length: 10,
                    lineStyle: {
                        color: "#0095ff"
                    }
                }
            },
            {
                radius: '62%',
                splitNumber: '10',
                axisLine: {
                    lineStyle: {
                        color: [[1, '#0095ff']],
                        width: 10
                    }
                },
                splitLine: {
                    length: 10,
                    lineStyle: {
                        color: 'black',
                        width: 4
                    }
                }
            },
            {
                radius: '56%',
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [[1, '#0095ff']], // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                splitLine: { // 分隔线
                    show: false
                }
            },
            {
                splitNumber: '22',
                radius: '52%',
                axisLine: {
                    lineStyle: {
                        color: [[0, '#ff0090'], [1, '#631643']],
                        width: 25
                    }
                },
                splitLine: {
                    length: 25,
                    lineStyle: {
                        color: 'black',
                        width: 8
                    }
                }
            },
            {
                radius: '42%',
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [[1, '#0095ff']], // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                }
            },
            {
                radius: '38%',
                splitNumber: '22',
                axisLine: {
                    lineStyle: {
                        color: [[0, '#fcff00'], [1, '#626317']],
                        width: 20
                    }
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: 'black',
                        width: 6
                    }
                }
            }
        ]
    };

    var option2 = {
        backgroundColor: '',
        title: {
            x: 'center',
            y: '63%',
            bottom: 50,
            text: '流行性感冒',
            subtext: 'Influenza',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: "#0095ff"
            },
            subtextStyle: {
                fontWeight: 'normal',
                fontSize: 15,
                color: "#0095ff"
            }
        },
        tooltip: {
            format: function (params) {
                console.log(params);
            }
        },
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    image: "images/center.png",
                    width: 100,
                    height: 100
                },
                left: 'center',
                top: 'center'
            }]
        },
        series: [
            {
                splitNumber: 13, //刻度数量
                radius: '66%', //图表尺寸
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 10,
                        shadowBlur: 0,
                        color: [
                            [1, 'black']
                        ]
                    }
                },
                splitLine: {
                    length: 10,
                    lineStyle: {
                        color: "#0095ff"
                    }
                }
            },
            {
                radius: '62%',
                splitNumber: '10',
                axisLine: {
                    lineStyle: {
                        color: [[1, '#0095ff']],
                        width: 10
                    }
                },
                splitLine: {
                    length: 10,
                    lineStyle: {
                        color: 'black',
                        width: 4
                    }
                }
            },
            {
                radius: '56%',
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [[1, '#0095ff']], // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                splitLine: { // 分隔线
                    show: false
                }
            },
            {
                splitNumber: '22',
                radius: '52%',
                axisLine: {
                    lineStyle: {
                        color: [[0, '#ff0090'], [1, '#631643']],
                        width: 25
                    }
                },
                splitLine: {
                    length: 25,
                    lineStyle: {
                        color: 'black',
                        width: 8
                    }
                }
            },
            {
                radius: '42%',
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [[1, '#0095ff']], // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                }
            },
            {
                radius: '38%',
                splitNumber: '22',
                axisLine: {
                    lineStyle: {
                        color: [[0, '#fcff00'], [1, '#626317']],
                        width: 20
                    }
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: 'black',
                        width: 6
                    }
                }
            }
        ]
    };

    var option3 = {
        backgroundColor: '',
        title: {
            x: 'center',
            y: '63%',
            bottom: 50,
            text: '手足口病',
            subtext: 'HF&M Disease',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                color: "#0095ff"
            },
            subtextStyle: {
                fontWeight: 'normal',
                fontSize: 15,
                color: "#0095ff"
            }
        },
        tooltip: {
            format: function (params) {
                console.log(params);
            }
        },
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    image: "images/center.png",
                    width: 100,
                    height: 100
                },
                left: 'center',
                top: 'center'
            }]
        },
        series: [
            {
                splitNumber: 13, //刻度数量
                radius: '66%', //图表尺寸
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 10,
                        shadowBlur: 0,
                        color: [
                            [1, 'black']
                        ]
                    }
                },
                splitLine: {
                    length: 10,
                    lineStyle: {
                        color: "#0095ff"
                    }
                }
            },
            {
                radius: '62%',
                splitNumber: '10',
                axisLine: {
                    lineStyle: {
                        color: [[1, '#0095ff']],
                        width: 10
                    }
                },
                splitLine: {
                    length: 10,
                    lineStyle: {
                        color: 'black',
                        width: 4
                    }
                }
            },
            {
                radius: '56%',
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [[1, '#0095ff']], // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                splitLine: { // 分隔线
                    show: false
                }
            },
            {
                splitNumber: '22',
                radius: '52%',
                axisLine: {
                    lineStyle: {
                        color: [[0, '#ff0090'], [1, '#631643']],
                        width: 25
                    }
                },
                splitLine: {
                    length: 25,
                    lineStyle: {
                        color: 'black',
                        width: 8
                    }
                }
            },
            {
                radius: '42%',
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [[1, '#0095ff']], // 属性lineStyle控制线条样式
                        width: 2
                    }
                },
                splitLine: {
                    show: false
                }
            },
            {
                radius: '38%',
                splitNumber: '22',
                axisLine: {
                    lineStyle: {
                        color: [[0, '#fcff00'], [1, '#626317']],
                        width: 20
                    }
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: 'black',
                        width: 6
                    }
                }
            }
        ]
    };
 
    for (var i = 0; i < option1.series.length; i++) {
        option1.series[i].type = 'gauge';
        option1.series[i].startAngle = 220;
        option1.series[i].endAngle = -40;
        option1.series[i].center = ['50%', '50%'];
        option1.series[i].axisTick = {show: false};
        option1.series[i].axisLabel = {show: false};
        option1.series[i].pointer = {show: false};
        option1.series[i].detail = {show: false};
 
    }

    for (var i = 0; i < option2.series.length; i++) {
        option2.series[i].type = 'gauge';
        option2.series[i].startAngle = 220;
        option2.series[i].endAngle = -40;
        option2.series[i].center = ['50%', '50%'];
        option2.series[i].axisTick = {show: false};
        option2.series[i].axisLabel = {show: false};
        option2.series[i].pointer = {show: false};
        option2.series[i].detail = {show: false};
 
    }

    for (var i = 0; i < option3.series.length; i++) {
        option3.series[i].type = 'gauge';
        option3.series[i].startAngle = 220;
        option3.series[i].endAngle = -40;
        option3.series[i].center = ['50%', '50%'];
        option3.series[i].axisTick = {show: false};
        option3.series[i].axisLabel = {show: false};
        option3.series[i].pointer = {show: false};
        option3.series[i].detail = {show: false};
 
    }
 
 
    var  panel1 = echarts.init(document.getElementById("panel1"));//get()方法作用：将jQuery对象转Dom对象
     panel1.setOption(option1,'chalk');
     var  panel2 = echarts.init(document.getElementById("panel2"));//get()方法作用：将jQuery对象转Dom对象
     panel2.setOption(option2,'chalk');
     var  panel3 = echarts.init(document.getElementById("panel3"));//get()方法作用：将jQuery对象转Dom对象
     panel3.setOption(option3,'chalk');
 
 //表1
    var num1 = 0, num2 = 0;
    var myInterval = setInterval(function () {
        num1 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
        num2 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
        if (num1 >= mapData.rate[2][1]) num1 = mapData.rate[2][1];
        if (num2 >= mapData.rate[2][2]) num2 = mapData.rate[2][2];
        option1.series[3].axisLine.lineStyle.color = [[num1, '#ff0090'], [1, '#631643']];
        option1.series[5].axisLine.lineStyle.color = [[num2, '#fcff00'], [1, '#626317']];
         panel1.setOption(option1,'chalk');
    }, 50);

     //表2
 var num3 = 0, num4 = 0;
 var myInterval = setInterval(function () {
     num3 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
     num4 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
     if (num3 >= mapData.rate[1][1]) num3 = mapData.rate[1][1];
     if (num4 >= mapData.rate[1][2]) num4 = mapData.rate[1][2];
     option2.series[3].axisLine.lineStyle.color = [[num3, '#ff0090'], [1, '#631643']];
     option2.series[5].axisLine.lineStyle.color = [[num4, '#fcff00'], [1, '#626317']];
      panel2.setOption(option2,'chalk');
 }, 10);

 //表3
 var num6 = 0, num5 = 0;
 var myInterval = setInterval(function () {
     num6 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
     num5 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
     if (num6 >= mapData.rate[0][1]) num6 = mapData.rate[0][1];
     if (num5 >= mapData.rate[0][2]) num5 = mapData.rate[0][2];
     option3.series[3].axisLine.lineStyle.color = [[num6, '#ff0090'], [1, '#631643']];
     option3.series[5].axisLine.lineStyle.color = [[num5, '#fcff00'], [1, '#626317']];
      panel3.setOption(option3,'chalk');
 }, 50);



 $("#paneldata1").html(((((mapData.rate[1][1]+mapData.rate[2][1]+mapData.rate[0][1])/3)*100).toFixed(2))+'%')
 $("#paneldata2").html(((mapData.rate[1][2]+mapData.rate[2][2]+mapData.rate[0][2])/3).toFixed(4)*100+'%')
 $("#paneldata3").html(mapData.trend[1][mapData.trend[1].length-1])
$("#comprehensive").html(mapData.trend[2][mapData.trend[2].length-1]+mapData.trend[1][mapData.trend[1].length-1]+mapData.trend[3][mapData.trend[3].length-1])
    

//////////////panel/////////////////////////////////////////////////////////////////////////////

$("#backhome").click(function(){
    window.location.href='../home/index.html';
})