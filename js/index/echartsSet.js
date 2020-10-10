// import echarts from '../../utils/echarts/echarts-en.common.js'
import echarts from 'echarts'

export let EchartsSet = {
	myChart: null,
	data: {},
	handleEchartsData: function(data) {
		// console.log(data)
		let optionData = {
			seriesData: [],
			xAxisData: [],
			colorBar: [],
			legendData: []
		}
		/*
		 DataName: "退回方案率"
		 Trans: 0
		 TypeName: "公司"
		 Val: 14
		 */
		data.forEach(item => {
			if(optionData.xAxisData.indexOf(item.DataName) == -1){
				
				
				optionData.xAxisData.push(item.DataName)
			}
			
			if(optionData.legendData.indexOf(item.TypeName) == -1){
				optionData.legendData.push(item.TypeName)
				if(item.TypeName == '公司'){
					optionData.colorBar.push('#63B2EE')
				}else{
					optionData.colorBar.push('#76DA91')
				}
				
				let obj = {
					name: item.TypeName,
					type: 'bar',
					data: [item.Val],
					barWidth: 60
				}
				optionData.seriesData.push(obj)
			}else{
				optionData.seriesData.forEach(i => {
					if(i.name == item.TypeName){
						i.data.push(item.Val)
					}
				})
			}
			
		})
		if(optionData.legendData.length == 2){
			optionData.seriesData.forEach(a => {
				a.barWidth = 25
			})
		}
		// console.log(optionData)
		this.initEcharts(optionData)
		this.data = optionData;
	},
	/* optionData:
	 seriesData		Array	//总数居
	 xAxisData  Array	//x轴
	 colorBar  Array    	公司  #63B2EE     个人  #76DA91
	 legendData Array   提示颜色块对应文字
	 */
	initEcharts: function(optionData, bool) {
		this.myChart = echarts.init(document.getElementById('canvas-bar'));
	
		var option = {
			color: optionData.colorBar,
			title: {
				text: '2020年数据统计', //主标题
				textStyle: {
					color: 'rgb(102,102,102)', //颜色
					fontWeight: '700', //粗细
					fontSize: 14, //大小
				},
				x: 'center',
				y: 'top'
			},
			grid: { //显示数据的图表位于当前canvas的坐标轴
				left: '7%',
				right: '18%',
				bottom: '10%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				data: optionData.xAxisData,
				axisTick: {
					show: true
				},
				axisLabel: { //x轴显示不全
					interval: 0,
					formatter: function(value) {
						var ret = ""; //拼接加\n返回的类目项  
						var maxLength = 5; //每项显示文字个数  
						var valLength = value.length; //X轴类目项的文字个数  
						var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
						if (rowN > 1) //如果类目项的文字大于3,  
						{
							for (var i = 0; i < rowN; i++) {
								var temp = ""; //每次截取的字符串  
								var start = i * maxLength; //开始截取的位置  
								var end = start + maxLength; //结束截取的位置  
								//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
								temp = value.substring(start, end) + "\n";
								ret += temp; //凭借最终的字符串  
							}
							return ret;
						} else {
							return value;
						}
					}
				},
				name: '统计项',
				nameTextStyle: {
					padding: [60, 0, 0, -40]
				}
			}],
			yAxis: [{
				type: 'value',
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				minInterval: 10,
				name: '百\n分\n率',
				nameTextStyle: {
					padding: [0, 0, -50, -80]
				}
			}],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			legend: {
				data: optionData.legendData,
				right: 20,
				top: 30,
				itemWidth: 15,
				itemHeight: 15,
				orient: 'vertical'
			},
			series: optionData.seriesData
		};
		// 使用刚指定的配置项和数据显示图表。
		this.myChart.setOption(option, bool);
	}
}

window.onresize = function(){
	// console.log(window.innerWidth)
	if(window.innerWidth <= 1200){
		EchartsSet.data.seriesData.forEach(item => {
				item.barWidth = 20
		})
		EchartsSet.initEcharts(EchartsSet.data, true)
	}else{
		EchartsSet.data.seriesData.forEach(item => {
			
			item.barWidth = 60
			
			
		})
		EchartsSet.initEcharts(EchartsSet.data, true)
	}
	EchartsSet.myChart.resize()
	// resize()
	
}

