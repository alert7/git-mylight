
// 此处是四个echarts表的函数，可以直接修改下面的数据，连接后台时更换数据就好
function echart1() {
    var myChart = echarts.init(document.getElementById('div1'));
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            data:[0,5,10,15,20,25,30,35,40]
        },
        series: [{
            data: [20, 32, 01, 34, 10, 30, 20],
            type: 'line'
        }]
    };
    myChart.setOption(option);
}
function echart2() {
    var myChart = echarts.init(document.getElementById('div2'));
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            data:[0,5,10,15,20,25,30,35,40]
        },
        series: [{
            data: [1, 22, 2, 0, 9, 30, 20],
            type: 'line'
        }]
    };
    myChart.setOption(option);
}
function echart3() {
    var myChart = echarts.init(document.getElementById('div3'));
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            data:[0,5,10,15,20,25,30,35,40]
        },
        series: [{
            data: [3, 6, 9, 12, 15, 18, 20],
            type: 'line'
        }]
    };
    myChart.setOption(option);
}
function echart4() {
    var myChart = echarts.init(document.getElementById('div4'));
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            data:[0,5,10,15,20,25,30,35,40]
        },
        series: [{
            data: [20, 32, 9, 32, 16, 19, 2],
            type: 'line'
        }]
    };
    myChart.setOption(option);
}