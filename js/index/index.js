const {loginAxios} = require('../loginAxios.js')
// const {LoginAxiosTimes} = require('../loginAxios.js')
import Vue from '../../utils/vue/vue.esm.browser.js'
// import Vue from 'vue'
import "@babel/polyfill";

import {EchartsSet} from './echartsSet.js'
import {globalAxios} from './axios.js'

import resetStyle from '../../css/reset.css'
import indexStyle from '../../css/index.css'


new Vue({
	el: '#app',
	data() {
		return {
			number1Array: [{
					number: '--',
					name: '待处理方案',
					imgSrc: './images/pen.png',
					href: 'http://jspt.stec.sh.cn/OAIndex/table.html?table=Projectmanagementinapproval.jsp&name=待处理'
				},
				{
					number: '--',
					name: '待处理方案<br/>(专家评审后)',
					imgSrc: './images/man.png',
					href: 'http://jspt.stec.sh.cn/OAIndex//table.html?table=ProgramManagementinExpertApproval.jsp&name=待处理'
				}
			],
			number2Array:[
				{
					number: '--',
					name: '审批中方案',
					imgSrc: './images/lock.png',
					href: 'http://jspt.stec.sh.cn/OAIndex//table.html?table=Projectmanagementinapproval.jsp'
				},
				{
					number: '--',
					name: '审批中方案<br/>(专家评审后)',
					imgSrc: './images/word.png',
					href: 'http://jspt.stec.sh.cn/OAIndex//table.html?table=ProgramManagementinExpertApproval.jsp'
				},
				{
					number: '--',
					name: '锁定方案',
					imgSrc: './images/set.png',
					href: 'http://jspt.stec.sh.cn/OAIndex//table.html?table=LockManagement.jsp'
				},
				{
					number: '--',
					name: '审批中关键工序验收',
					imgSrc: './images/set1.png',
					href: 'http://jspt.stec.sh.cn/OAIndex//table.html?table=AcceptanceandAcceptanceManagementofKeyProcessesinExaminationandApproval.jsp'
				}
			],
			notices0: [],
			notices1: [],
			notices2: [],
			todayChange: [],
			weeklyNotices: [	//工程周报
			],
			riskList: [	//风险清单
			]
		}
	},
	// mixins: [LoginAxiosTimes],
	created() {
		//一些不需要动态变化的变量
		this.noticesHref =
			'http://oa.stec.sh.cn/formmode/view/AddFormModeIframe.jsp?isPreview=1&modeId=20&formId=-91&type=0&layoutid=110&billid=' //通知、文件、 跳转链接
		this.down = 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=21&formId=-92&opentype=0&customid=19&viewfrom=fromsearchlist&billid=' //规程下载 跳转链接
		this.notices0More = 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=18' //通知的更多	
		this.notices1More = 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=213' //文件的更多
		this.notices2More = 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=19' //规程下载更多
		this.notices3More = 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=214' //风险清单更多
		this.notices4More = 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=215' //工程周报更多
		this.newNotices = 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=20&formId=-91&opentype=0&customid=18&viewfrom=fromsearchlist&billid='

		//资料查询
		this.zlSearch = [{
				name: '企业施工规程',
				href: 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=19'
			},
			{
				name: '工程管理制度',
				href: 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=20'
			},
			{
				name: '政策法规',
				href: 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=21'
			},
			{
				name: '方案编制标准',
				href: 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=23'
			},
			{
				name: '	优秀论文推荐',
				href: 'http://oa.stec.sh.cn/formmode/search/CustomSearchBySimple.jsp?customid=22'
			},
			{
				name: '	技术规范标准',
				href: 'http://biaozhun.stec.sh.cn/login.aspx'
			}
		]
		//空中课堂
		/* this.kzkt = [{
				name: '规程培训',
				href: 'http://cc.stec.sh.cn'
			},
			{
				name: '	会议视频',
				href: 'https://www.tunnelling.cn/PVideo/VideoMeeting.aspx'
			},
			{
				name: '优秀施组',
				href: 'http://stec.xlinfo.cc/couseware_list.asp?id=3'
			},
			{
				name: '	其他视频',
				href: 'http://stec.xlinfo.cc/couseware_list.asp?id=5'
			}
		] */
		//图片列表
		this.picList = [{
				imgSrc: './images/link4_1.jpg',	//工程技术管理报告评选
				href: 'https://tm.stec.sh.cn/PlanReview/PlanReview_ShowFirstResult.aspx'
			},
			{
				imgSrc: './images/linka.jpg',//历史方案查询
				href: 'https://tm.stec.sh.cn/OSAuthed.aspx?id=1'
			},
			{
				imgSrc: './images/link2.jpg',//技术人员序列考评
				href: 'http://xlkp.stec.sh.cn:6158'
			},
			{
				imgSrc: './images/link1.jpg',//科技汇编
				href: 'https://www.tunnelling.cn/PNews/CompilationDetail.aspx'
			},
			{
				imgSrc: './images/link6.jpg',//技术规范标准
				href: 'http://biaozhun.stec.sh.cn/login.aspx'
			},
			{
				imgSrc: './images/link3.jpg',//科技论文
				href: 'https://www.tunnelling.cn/PLibrary/PLibraryTechnical.aspx?Tech=49'
			}
		]
	},
	methods: {
		getNumberData(index) {
			let spName = 'XL_SY_ListCount_' + index + '_List'
			let data = {
				SPNAME: spName
			}
			let self = this;
			function fnSucess(res){
				let number = JSON.parse(res.data)[0].CCC;
				let i = index;
				if(index >= 2){
					i = index - 2
					self.$set(self.number2Array[i], 'number', number)
				}else{
					self.$set(self.number1Array[i], 'number', number)
				}
			}
			globalAxios('', data, fnSucess)
		},
		getNoticesData(index) {
			let data = {
				SPNAME: 'XL_SY_List',
				LX: index
			}
			let self = this;
			function fnSucess(res){
				// console.log(res,index)
				self['notices'+index] = JSON.parse(res.data)
			}
			globalAxios('', data, fnSucess)
		},
		getNewNoticesData() {
			let data = {
				SPNAME: 'XL_Main91_List',
				TYPE: -1,
				// FBRQ: this.getOneWeek()  //输入日期（格式 yyyy-MM-dd）,返回 大于等于 FBRQ 指定日期的所有数据。
				FBRQ: '2020-01-01'
			}
			let self = this;
			function fnSucess(res){
				let arr = JSON.parse(res.data)
				arr.forEach(item => {
					item.href = self.newNotices + item.id;
					if(item.Type == 3 && self.weeklyNotices.length < 2){//工程周报
						self.weeklyNotices.push(item)
					}else if(item.Type == 2 && self.riskList.length < 2){//风险清单
						self.riskList.push(item)
					}
				})
			}
			globalAxios('', data, fnSucess)
		},
		getOneWeek(){
			let start = new Date(new Date() - (new Date().getDay() - 1) * 86400000);
			
			let arr = start.toLocaleDateString().split('/');
			let str = "";
			for(let i = 0; i < arr.length; i++){
				str += arr[i] < 10 ? '0' + arr[i] : arr[i]
			}
			return str
		},
		getEchartsData(bool) {
			// DBO.fnGetMyWorkFlowStat
			let data = {
				SPNAME: 'XL_SY_Today_List'
			}
			if (bool) {
				data.SPNAME = 'XL_SY_TodayChange_List'
			}
			let self = this;
			function fnSucess(res){
				// console.log(res,index)
				if(!bool){//统计图
					EchartsSet.handleEchartsData(JSON.parse(res.data))
				}else{	//右侧数据
					let data = JSON.parse(res.data);
					for(let i = 0; i < data.length; i++){
						if(data[i].DataName == '项目数'){
							data[i].DataName = "方案数量"
							break
						}
					}
					self.todayChange = data
				}
				
			}
			globalAxios('', data, fnSucess)
		}
		
	},
	async mounted() {
		// console.log(loginAxios)
		// @LX=0通知，@LX=1通告，@LX=2企业规程下载  EXEC XL_SY @LX=
		await loginAxios()
		
		this.getNumberData(0)
		this.getNumberData(1)
		this.getNumberData(2)
		this.getNumberData(3)
		this.getNumberData(4)
		this.getNumberData(5)

		this.getNoticesData(0)
		this.getNoticesData(1)
		this.getNoticesData(2)

		this.getEchartsData()
		this.getEchartsData(true)
		
		this.getNewNoticesData()
		
	}
})

