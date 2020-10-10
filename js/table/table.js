const {API} = require('../api.js')
const {TableData} = require('./tableData.js')
const {loginAxios} = require('../loginAxios.js')
const {LoginAxiosTimes} = require('../loginAxios.js')
const {TABLESP} = require('../SP.js')
import Vue from '../../utils/vue/vue.esm.browser.js'
// import axios from '../../utils/axios/axios.js'
// import Vue from 'vue'
import axios from 'axios'
import "@babel/polyfill";


import resetStyle from '../../css/reset.css'
import tableStyle from '../../css/table.css'
new Vue({
	el: "#app",
	data: {
		TABLEDATA: {},
		isShowSearch: true, //整个搜索显示隐藏
		searchArray: [], //搜索的字段列表
		page: 1,
		pageSize: 20,
		totalPage: 1,
		tableHeader: [],
		addTableHeader: [],
		// renderTableDate: [],
		tableDate: [],
		isLoading: false,
		oldMenuDown: {},
		tips: ''
	},
	mixins: [LoginAxiosTimes],
	computed: {
		topSearchArray() {
			let arr = []
			if (this.searchArray.length <= 3) {
				return arr
			} else {
				for (let i = 0; i < this.searchArray.length; i++) {
					if (Math.floor(this.searchArray.length / 2) <= i) {
						break;
					} else {
						arr.push(this.searchArray[i])
					}
				}
				return arr;
			}

		},
		bottomSearchArray() {
			if (this.searchArray.length <= 3) {
				return this.searchArray
			} else {
				let arr = [];
				for (let i = 0; i < this.searchArray.length; i++) {
					if (Math.floor(this.searchArray.length / 2) <= i) {
						arr.push(this.searchArray[i])
					}
				}
				return arr;
			}
		},
		renderTableDate() {
			if(this.tableDate.length === 0)return []
			let arr = [];
			let i = (this.page - 1) * this.pageSize
			for(;i < this.page * this.pageSize; i++){
				if(this.tableDate[i]){
					arr.push(this.tableDate[i])
				}else{
					break
				}
				
			}
			if(arr.length == 0){
				this.tips = "没有数据了..."
			}
			return arr
			
			
		}
	},
	methods: {
		toggleSearchWrap() {
			this.isShowSearch = !this.isShowSearch
		},
		async getTableData(data) {
			this.isLoading = true;
			this.tips = "正在加载中..."
			let myListData = [];
			//已通过  审批中方案管理
			let flag = false
			if(this.TABLEDATA.data.SPNAME === TABLESP[6].sp && data.TEST && data.TEST === '已通过'){
				// this.TABLEDATA.tableHreader[1].sName = 'ProgramName2';
				//发请求
				data.TEST = ""
				flag = true
				this.tableDate = [];
				let myData = {
					SPNAME: 'XL_Solution_IEAA_My_List'
				};
				myListData = await this.getMyList(myData)
				
			}
			// console.log("新增",myListData)
			axios.post(API, {
					Data: JSON.stringify(data)
				}, {
					withCredentials: true
				})
				.then(res => {
					// console.log(data)
					this.isLoading = false;
					let data = JSON.parse(res.data);
					
					let dataArr = [];
					if(flag){
						if(myListData.length > 0){
							myListData.forEach(item => {
								data.forEach(d => {
									if(d.requestid === item.requestId && !(d.canManageRequestID != 0)){
										// console.log("相同", d)
										dataArr.push(d)
									}
								})
							})
						}
					}else{
						dataArr = data;
					}
					if(dataArr.length == 0){
						this.tips = "没有数据了...";
					}
					flag = false;
					//渲染数据
					this.handleTableData(dataArr)
				})
				.catch((err) => {
					this.isLoading = false;
					
					// console.log(err)err.response.data.ExceptionMessage
					if(err.response.data.ExceptionMessage.indexOf("请登录") != -1 && this.loginTimes < 10){
						this.tips = "正在登陆！"
						this.loginTimes++
						loginAxios()
					}
					this.tips = ""
				})
		},
		copyObject(obj){	//浅拷贝，避免childs无限引用
			let copyObj = {};
			for(let k in obj){
				if(obj.hasOwnProperty(k) && k != 'childs'){
					copyObj[k] = obj[k]
				}
			}
			return copyObj
		},
		handleRowColor(rowData){	//行变色
			if(!this.TABLEDATA.fontcolor){
				if(rowData.nodename && (rowData.nodename.indexOf('创建')> -1 || rowData.nodename.indexOf('发起')> -1)){	//一行橙色的字体
					rowData.active = true;
					return true;
				}else{
					return false;
				}
			}else{
				if(rowData.thzt && rowData.thzt == 3){	//一行橙色的字体
					rowData.active = true;
					return true;
				}else{
					return false;
				}
			}
		},
		handleTableData(data) { //处理请求的table数据
			// console.log(data)
			let array= [];
			let  obj = {};
			for (let i = 0; i < data.length; i++) {
				if(this.TABLEDATA.rowColor){
					this.handleRowColor(data[i])
				}
				
				
				//处理特殊列
				this.TABLEDATA.handleTableOperation && this.TABLEDATA.handleTableOperation(data[i])
				
				// 部分名称不合并
				if(!this.TABLEDATA.noMergeName){
					if (!obj[data[i][this.tableHeader[1].sName]]) {	//判断是否是同名合并，没有
						let copyObj = this.copyObject(data[i])
						copyObj.childs = [];
						copyObj.childs.push(this.copyObject(data[i]))
						array.push(copyObj)
						obj[data[i][this.tableHeader[1].sName]] = copyObj
					} else {	//已经有了
						obj[data[i][this.tableHeader[1].sName]].childs.push(this.copyObject(data[i]))
					}
					//合并中有变色，标题就变颜色
					if(this.TABLEDATA.rowColor && this.handleRowColor(data[i])){
						obj[data[i][this.tableHeader[1].sName]].childs[0].titleColor = true;
					}
				}else{
					let copyObj = this.copyObject(data[i])
					copyObj.childs = [];
					copyObj.childs.push(this.copyObject(data[i]))
					array.push(copyObj)
				}
				
			}
			
			//其他列合并
			this.TABLEDATA.handleMergeCol && this.TABLEDATA.handleMergeCol(array)
			
			this.totalPage = Math.ceil(array.length / this.pageSize);
			sessionStorage.setItem('totalPage', JSON.stringify({totalPage:this.totalPage}));
			this.tableDate = array;
			// console.log(array)
		},
		handleData() { //处理参数
			let data = {};
			this.searchArray.forEach(item => {
				if (item.date) {	//日期参数
					data[item.sName1] = item.value1
					data[item.sName2] = item.value2
					data.DESC = 'yes';
					data.OrderBy = 'id';
				} else if (item.sort) {	//排序参数
					if (item.value1 == "顺序") {
						data[item.sName1] = 'yes'
					}else{
						data[item.sName1] = ''
					}
					if (item.value2) {
						item.menu2List.forEach(i => {
							if (i.name == item.value2) {
								data[item.sName2] = i.sName
							}
						})
					}else{
						data.OrderBy = "id"
					}
					
				} else {//其它参数
					//下拉
					if(item.menuList){
						if(item.menuList.length == 0){
							data[item.sName] = ''
						}else{
							for(let i = 0; i < item.menuList.length; i++){
								if(item.menuList[i].name == item.value){
									data[item.sName] = item.menuList[i].value
									break
								}else{
									data[item.sName] = item.value
								}
							}
						}
						
					}else{
						data[item.sName] = item.value
					}
					data.DESC = 'yes';
					data.OrderBy = 'id';
				}
			})
			// "DESC":"yes","OrderBy":"id"
			for (let k in this.TABLEDATA.data) {
				data[k] = this.TABLEDATA.data[k]
			}
			
			
			// data.PageSize = this.pageSize
			data.PageSize = 0
			//处理页码
			let table = JSON.parse(sessionStorage.getItem('table') || JSON.stringify({flag: true}));
			let flag = false;
			if(!table.flag){
				for(let k in table){
					//页码外参数有变化
					if(k != 'PageIndex' && table[k] != data[k]){
						flag = true
						break;
					}
				}
				if(flag){
					this.page = 1
				}else{
					this.page = table.PageIndex
				}
			}
			data.PageIndex = this.page
			// console.log(data)
			return data
		},
		async getMyList(data){
			let myListData = [];
			await axios.post(API, {
					Data: JSON.stringify(data)
				}, {
					withCredentials: true
				})
				.then(res => {
					// console.log(data)
					this.isLoading = false;
					let data = JSON.parse(res.data);
					
					//渲染数据
					myListData = data
				})
				.catch((err) => {
					
					
					// console.log(err)err.response.data.ExceptionMessage
					if(err.response.data.ExceptionMessage.indexOf("请登录") != -1 && this.loginTimes < 10){
						this.tips = "正在登陆！"
						this.loginTimes++
						loginAxios()
					}
					this.tips = ""
				})
			return myListData
		},
		getProjectList(data){
			axios.post(API, {
					Data: JSON.stringify(data)
				}, {
					withCredentials: true
				})
				.then(res => {
					let data = JSON.parse(res.data);
					// console.log(data)
					this.TABLEDATA.projectList = this.handleProjectList(data)
					this.screenProjectName('all')
				})
				.catch((err) => {
					// console.log(err)
					loginAxios()
				})
		},
		handleProjectList(data){
			let projectList = {}
			for(let i = 0; i < data.length; i++){
				if(!projectList.all){	//全部的
					projectList.all = [{name: '不选', value: ''}]
				}
				let obj = {name: data[i].projectname, value: data[i].projectname};
				projectList.all.push(obj)
				
				
				if(!projectList[data[i].gldw]){
					projectList[data[i].gldw] = [{name: '不选', value: ''}]
				}
				let obj1 = {name: data[i].projectname, value: data[i].projectname}
				projectList[data[i].gldw].push(obj1)
			}
			return projectList;
		},
		renderSearchData(data) {
			this.TABLEDATA = data;
			this.tableHeader = this.TABLEDATA.tableHreader
			this.addTableHeader = this.TABLEDATA.addTableHeader
			
			//项目名称下拉
			if(this.TABLEDATA.projectList){
				let data = {
					SPNAME: 'XL_Project_Done_List',
					XMMC: '',
					DY: '',
					XMZG: '',
					GLDW: '',
					FQR: '',
					XMJL: ''
				}
				this.getProjectList(data)
			}
			
			
			this.TABLEDATA.showSearch.forEach(item => {
				if (item.name) {
					let search = item;
					if (item.name.indexOf('日期') > -1) {
						search.date = true
					} else if (item.name == '排序') {
						search.sort = true
						this.$set(item, 'menu1Down', false)
						this.$set(item, 'menu2Down', false)
					} else {
						this.$set(item, 'menuDown', false)
					}
					if(this.matchingUrl() && search.sName === this.matchingUrl().name){
						search.value = this.matchingUrl().value
						// console.log(search, this.matchingUrl())
					}
					this.searchArray.push(search)
				}
			})
			
		},
		search(flag) {
			if(this.isLoading) return
			if(!flag){	//初始
				if(this.tableDate.length == 0){
					let data = this.handleData()
				
					this.setSession(data)
					this.getTableData(data)
				}
			}else{	//点击查询
				let data = this.handleData()
								
				this.setSession(data)
				this.getTableData(data)
			}
			
			
		},
		dateInput(item, key, e) {
			item[key] = e.srcElement.value
		},
		handlePage() {
			let table = JSON.parse(sessionStorage.getItem('table'));
			table.PageIndex = this.page
			this.setSession(table)
			this.search()
		},
		skipPage(skipSize) {
			if(this.isLoading) return
			if (skipSize == '首页') {
				if (this.page <= 1) return
				this.page = 1
			} else if (skipSize == '末页') {
				if (this.page >= this.totalPage) return
				this.page = this.totalPage;
			} else if (skipSize == 1) {
				if (this.page >= this.totalPage) return
				this.page = Number(this.page) + Number(skipSize);
			} else if (skipSize == -1) {
				if (this.page <= 1) return
				this.page = Number(this.page) + Number(skipSize);
			} else {
				if (this.page < 1 || this.page > this.totalPage) return
			}
			this.handlePage()
		},
		menuDown(item, sortIndex) {
			if(item.name !== this.oldMenuDown.name){
				this.handlePrevent()
			}
			if (sortIndex) {
				if (sortIndex == 2) {
					item.menu2Down = !item.menu2Down
				} else {
					item.menu1Down = !item.menu1Down
				}
			} else {
				item.menuDown = !item.menuDown
			}
				this.oldMenuDown = item
			
		},
		chooseOption(item, index, sortValueIndex) {  //下拉选择
			if (sortValueIndex) { //排序的选择
				if (sortValueIndex == 2) { //名称
					let menu2List = item.menu2List;
					if (index == 0) {
						item.value2 = ""
					} else {
						item.value2 = menu2List[index].name
					}
					item.menu2Down = false;
				} else { //顺序
					let menu1List = item.menu1List;
					item.value1 = menu1List[index].name;
					item.menu1Down = false;
				}
			} else { //非排序选择
				let menuList = item.menuList
				if (index == 0) {
					item.value = ""
				} else {
					item.value = menuList[index].name
				}
				if(item.name === '管理单位' && this.TABLEDATA.projectList){//需要同步项目名
					let value = item.value || 'all';
					this.screenProjectName(value)
				}
				item.menuDown = false;
			}
		},
		screenProjectName(gldwName){
			// console.log(this.TABLEDATA.projectList)
			for(let i = 0; i < this.TABLEDATA.showSearch.length; i++){
				if(this.TABLEDATA.showSearch[i].name === '项目名称'){
					this.$set(this.TABLEDATA.showSearch[i], 'menuList', this.TABLEDATA.projectList[gldwName])
					// this.TABLEDATA.showSearch[i].menuList = this.TABLEDATA.projectList[gldwName]
				}
			}
		},
		handlePrevent() {
			if(this.oldMenuDown.menu2Down){
				this.oldMenuDown.menu2Down = false
			}
			if(this.oldMenuDown.menu1Down){
				this.oldMenuDown.menu1Down = false
			}
			if(this.oldMenuDown.menuDown){
				this.oldMenuDown.menuDown = false
			}
		},
		refresh(){	//刷新按钮
			location.reload() 
		},
		matchingTable() {
			let tableName = location.href.split('?table=')[1];
			let data = null;
			for (let k in TableData) {
				if (tableName && tableName.indexOf(k) > -1) {
					data = TableData[k];
					
					//树结构
					if (k == "Schemeplandeclaration.jsp") {
						let url = location.href.split('customTreeDataId=')[1]
						let id = (url && url.split('&')[0]) || ''
						data.data.treeID = id
						this.$nextTick(() => {
							// console.log(document.getElementsByClassName('table-wrap'))
							let tableWrap = document.getElementsByClassName('table-wrap')[0];
							let height = window.innerHeight - 28;
							tableWrap.style = "height:" + height + "px;"
						})
					}
				}
		
			}
			if(data){
				this.renderSearchData(data)
			}else{
				this.tips = "参数出错！"
			}
			
		},
		matchingUrl(){		//首页连过来的
			let tableName = location.href.split('?table=')[1];
			let value = ''
			//审批中方案管理
			if(tableName && tableName.indexOf("Projectmanagementinapproval.jsp") > -1){
				value = tableName.split('&name=')[1] || ''
				
				return {name: 'TEST', value: decodeURI(value)}
			}
			//审批中专业评审方案管理
			if(tableName && tableName.indexOf("ProgramManagementinExpertApproval.jsp") > -1){
				value = tableName.split('&name=')[1] || ''
				
				return {name: 'TEST', value: decodeURI(value)}
			}
			return false
		},
		setSession(data){
			sessionStorage.setItem('table', JSON.stringify(data));
		}
	},
	async mounted() {
		//同步表格
		this.matchingTable()
		await loginAxios()
		
		//请求表格数据
		this.search(false)
		
		
	}
})
