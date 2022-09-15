// 自己写的index.js 主要是逻辑代码
// 生成echart.js的图标三步骤
// 1.echart初始化
// 2.echart配置
// 3.配置项目（第二部生成）给第一个的初始化代码使用
// js定义一个方法用function
// 定义了exa1的方法，定义了必须要运行，否则无效


function exa1() {
    // let定义变量
    // document是网页 querySelector查找 #表示id
    let box = document.querySelector("#e1")
    let myChart = echarts.init(box)

    // 获取外部的data.json文件数据
    fetch("../data/data.json",{
        method:"get", //拿到数据get，上传数据post。修改put，删除delete，更新update
        mode:"no-cors"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(resultData){
        console.log(resultData)

        
    // 配置选项
    let option = {
        color: "#3398DB",
        grid: {
            // 决定表格大小
            left: "2%",
            top: "4%",
            right: "2%",
            bottom: "4%",
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: "shadow"
            }
        },
        xAxis: {
            // 只要和坐标有关的 都是axis开头
            type: 'category',
            data: ['光伏', '车联网', '通信', '梯联网', '传感器', '光学'],
            axisLabel: {//坐标标签
                color: "rgba(255,255,255,0.7)",
                fontSize: 10
            },
            axisLine: {//坐标线
                show: false
            },
            axisTick: {//坐标刻度
                show: false
            }
        },

        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,0.7)",
                fontSize: 10
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },

        series: [{
            name: "产值（亿元）",
            data: resultData.data1,
            type: 'bar',
            barWidth: "32%",
            itemStyle: {
                barBorderRadius: [10, 10, 0, 0]
                // [左上角，右上角，右下角，左下角]
            }
        }]
    };

    // 把配置给第一步使用
    myChart.setOption(option)

    // 响应式的配置
    // window浏览器窗口
    // document网页
    // wimdow.addEventListener("监听事件"，"监听到该事件之后执行的方法")
    window.addEventListener("resize", function () {
        myChart.resize()
    })
    })


}

exa1()//使用函数


function exa2() {
    let box = document.querySelector("#e2")
    let myChart = echarts.init(box)
    let mycolor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "hotpink"];
    fetch("../data/data.json",{
        method:"get",
        mode:"no-cors"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(resultData){
        console.log(resultData)


        let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: { show: false },
                axisLabel: { show: false }
    
            },
            yAxis: [
                {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '英国'],
                    inverse: true,
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { color: "white" }
                },
                {
                    type: 'category',
                    data: ["870万", "760万", "550万", "430万", "220万", "560万"],
                    inverse: true,
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisLabel: { color: "white" }
                }
            ],
            series: [
                {
                    name: '产值',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: resultData.data2[0],
                    barWidth: 11,//柱状体宽度
                    barCategoryGap: 30,//柱状图间隔
                    label: {
                        //  { a }：系列名。
                        // { b }：数据名。
                        // { c }：数据值。
                        show: true,
                        position: "inside",
                        formatter: "{c}%"
                    },
                    get Label() {
                        return this._Label;
                    },
                    set Label(value) {
                        this._Label = value;
                    },
                    itemStyle: {
                        barBorderRadius: 20,
                        // color:mycolor[0]  让他从0-5自动增加
                        color: function (params) {
                            // console.log(params.dataIndex)这个就是六个柱状体的序号
                            return mycolor[params.dataIndex]
                        }
                    }
                },
                {
                    name: '产量',
                    type: 'bar',
                    yAxisIndex: 1,
                    barWidth: 15,
                    data: resultData.data2[1],
                    itemStyle: {
                        color: "none",
                        barBorderRadius: 20,
                        borderWidth: 2,
                        borderColor: "#00c1de"
                    }
                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })

    })


 
}


exa2()

function exa3() {
    let box = document.querySelector("#e3")
    let myChart = echarts.init(box)

    fetch("../data/data.json",{
        method:"get",
        mode:"no-cors"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(resultData){
        console.log(resultData)

        let option = {

            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: { color: "#4c9bfd" },
                right: "20px"
            },
            grid: {
                left: '10',
                right: '10',
                top:'30',
                bottom: '30',
                containLabel: true
            },
            // toolbox: {下载工具
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: "white" },
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: "white" },
                splitLine: {
                    lineStyle: {
                        color: "#012f4a"
                    }
                }
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    // smooth:true,光滑线
                    smooth: true,
                    data: resultData.data3[0]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    smooth: true,
                    data: resultData.data3[1],
                    color: "#3398D8"
                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })

    })
    
}

exa3()

function exa4() {
    let box =document.querySelector("#e4")
    let myChart = echarts.init(box)

    fetch("../data/data.json",{
        method:"get",
        mode:"no-cors"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(resultData){
        console.log(resultData)

        let option = {
        
            tooltip: {
                trigger: 'axis',
                axisPointer: {
    //                 这是坐标轴指示器（axisPointer）的全局公用设置。
    
    // 坐标轴指示器是指示坐标轴当前刻度的工具。
    
    // 如下例，鼠标悬浮到图上，可以出现标线和刻度文本。
    
    // 上例中，使用了 axisPointer.link 来关联不同的坐标系中的 axisPointer。
    
    // 坐标轴指示器也有适合触屏的交互方式，如下：
    
    // // 坐标轴指示器在多轴的场景能起到辅助作用
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                textStyle: { color: "#4c9bfd" },
                right: "20px"
            },
            // legend: {
            //     // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            //     // data可以不需要，和series数据挂钩
                
            // },
            
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
    
                    axisLabel:{color:"white"},
                    axisTick:{show:false},
                    axisLine:{show:false},
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel:{color:"white"},
                    axisTick:{show:false},
                    axisLine:{show:false},
                    splitLine: {
                        lineStyle: {
                            color: "#012f4a"
                        }
                    }
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    
                    data: resultData.data4[0],
    
                    smooth:true,
                    lineStyle:{
                        color:"#0184d5",
                        width:2
                    },
                    areaStyle:{
                        // 渐变色需要写一个函数
                        // new echarts.graphic.LinearGradient()
                        color:new echarts.graphic.LinearGradient(
    
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                              offset: 0.8,
                              color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                          ],
                          false
                        )
                      },
                      showSymbol:false,//不展示拐点
                },
                {
                    name: '联盟广告',
                    type: 'line',
                   
                    data: resultData.data4[1],
    
                    smooth:true,
                    lineStyle:{
                        color:"#00d887",
                        width:2
                    },
                    areaStyle:{
                        // 渐变色需要写一个函数
                        // new echarts.graphic.LinearGradient()
                        color:new echarts.graphic.LinearGradient(
    
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                              offset: 0.8,
                              color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                          ],
                          false
                        )
                      },
                      showSymbol:false,
          
    
                },
                
                
            ]
        };
        
    
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
        
    })

    

}

exa4()

function exa5() {
    let box = document.querySelector("#e5")
    let myChart = echarts.init(box)

    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };

    var XAData = [
        [{name:'西安'}, {name:'拉萨',value:100}],
        [{name:'西安'}, {name:'上海',value:100}],
        [{name:'西安'}, {name:'鄂尔多斯',value:100}],
        [{name:'西安'}, {name:'乌鲁木齐',value:100}],
        [{name:'西安'}, {name:'银川',value:100}]
    ];

    var XNData = [
        [{name:'西宁'}, {name:'昆明',value:100}],
        [{name:'西宁'}, {name:'上海',value:100}],
        [{name:'西宁'}, {name:'北京',value:100}],
        [{name:'西宁'}, {name:'乌鲁木齐',value:100}],
        [{name:'西宁'}, {name:'温州',value:100}]
    ];

    var YCData = [
        [{name:'长沙'}, {name:'南昌',value:100}],
        [{name:'长沙'}, {name:'太原',value:100}],
        [{name:'长沙'}, {name:'保定',value:100}],
        [{name:'长沙'}, {name:'拉萨',value:100}],
        [{name:'长沙'}, {name:'清远',value:100}],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {
            
        var res = [];
        for (var i = 0; i < data.length; i++) {
            
            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
           
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {  
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red',   //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + ' Top3',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i],
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });
    var option = {
        backgroundColor: 'rgba(25, 186, 139, 0)',
        
        tooltip : {
            trigger: 'item', 
            formatter:function(params, ticket, callback){
                if(params.seriesType=="effectScatter") {
                    return "线路："+params.data.name+""+params.data.value[2];
                }else if(params.seriesType=="lines"){
                    return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                }else{
                    return params.name;
                }
            } 
        },
        
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color:'#fff'
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#00186E',
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };



    myChart.setOption(option)
    window.addEventListener("resize", function () {
        myChart.resize()
    })

}

exa5()

function exa6(){
    let box = document.querySelector("#e6")
    let myChart = echarts.init(box)

    fetch("../data/data.json",{
        method:"get",
        mode:"no-cors"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(resultData){
        console.log(resultData)

        let option = {
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
              ],
          
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            
            legend: {
                
                bottom: 0,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                itemWidth:8,
                itemHeight:8,
                textStyle:{
                    color:"rgba(255,255,255,100)",
                    fontSize:10,
                }
    
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                         // 内圈   外圈
                    radius: ['40%', '60%'],
                    center:['50%','40%'],
                    label:{
                        show:false
                    },
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: resultData.data6[0], name: '直接访问'},
                        {value: resultData.data6[1], name: '邮件营销'},
                        {value: resultData.data6[2], name: '联盟广告'},
                        {value: resultData.data6[3], name: '视频广告'},
                        {value: resultData.data6[4], name: '搜索引擎'}
                    ]
                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })

   
     
}

exa6()

function exa7(){
    let box = document.querySelector("#e7")
    let myChart = echarts.init(box)

    fetch("../data/data.json",{
        method:"get",
        mode:"no-cors"
    })
    .then(function(data){
        return data.json()
    })
    .then(function(resultData){
        console.log(resultData)

    let option = {
       
        color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
       
        legend:{
            data:['河北','河南','陕西','山西','福建','上海','北京'],
            itemWidth:8,
            itemHeight:8,
            bottom:0,
            textStyle:{
                color:"rgba(255,255,255,100)",
                fontSize:10,
            }
        },
        calculable : true,
        series : [
            {
                name:'增值电信业务统计表',
                type:'pie',
                radius : [15, 50],
                labelLine:{
                    length:14,
                    length2:13
                },
                roseType : 'area',
                data:[
                    {value:resultData.data7[0], name:'河北'},
                    {value:resultData.data7[1], name:'河南'},
                    {value:resultData.data7[2], name:'陕西'},
                    {value:resultData.data7[3], name:'山西'},
                    {value:resultData.data7[4], name:'福建'},
                    {value:resultData.data7[5], name:'上海'},
                    {value:resultData.data7[6], name:'北京'}
                ]
            }
        ]
    };
    myChart.setOption(option)    
    window.addEventListener("resize", function () {
        myChart.resize()
    })
})
}
exa7()