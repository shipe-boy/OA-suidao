const {API} = require('../api.js')
const {TABLESP} = require('../SP.js')
const {loginAxios} = require('../loginAxios.js')
const {LoginAxiosTimes} = require('../loginAxios.js')
import Vue from '../../utils/vue/vue.esm.browser.js'
// import axios from '../../utils/axios/axios.js'
// import Vue from 'vue'
import axios from 'axios'
import "@babel/polyfill";

import resetStyle from '../../css/reset.css'
import tableStyle from '../../css/tableDetails.css'

new Vue({
	el: '#app',
	data(){
		return{
			isShowDeloag: false,
			showdragDiv: false,
			tableData: [],
			title: '',
			href: 'javascript:;'
		}
	},
	mixins: [LoginAxiosTimes],
	created(){
		this.drag = {}
		this.hrefHead = "http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?"
	},
	methods: {
		toggleDeloag(){
			this.isShowDeloag = !this.isShowDeloag;
		},
		mouseDown(e){
			this.drag.init = true;
			this.showdragDiv = true;
			
			this.drag.startTop = e.clientY - this.$refs.borderDiv.offsetTop;
			this.drag.startLeft = e.clientX - this.$refs.borderDiv.offsetLeft;
		},
		mouseMove(e){
			if(!this.drag.init) return
			this.drag.disTop = e.clientY - this.drag.startTop
			this.drag.disLeft = e.clientX - this.drag.startLeft
			
			this.$refs.borderDiv.style = `top: ${this.drag.disTop}px;left: ${this.drag.disLeft}px;`
		},
		mouseUp(e){
			this.drag.init = false;
			this.showdragDiv = false;
			this.$refs.deloag.style = `top: ${this.drag.disTop}px;left: ${this.drag.disLeft}px;`
		},
		getData(id){
			let data = {
				SPNAME: 'XL_REQUESTID_List',
				REQUESTID: 0,
				encrequestid: id
			};
			axios.post(API,{
					Data: JSON.stringify(data)
				}, {
					withCredentials: true
				})
				.then(res => {
					let data = JSON.parse(res.data)
					data.forEach(item => {
						if(item.LogTypeName.indexOf("退回") > -1){
							item.style = 'color: red;'
						}else if(item.LogTypeName.indexOf("批准") > -1){
							item.style = 'color: rgb(0,128,0);'
						}
					})
					data.sort((a,b) => {
						return a.ROWINDEX - b.ROWINDEX
					})
					
					this.tableData = data;
					// console.log(data)   ROWINDEX
					this.$nextTick(()=>{
						setTimeout(() => {
							let richText = document.querySelector('.table-wrap table tbody tr td table');
							if(richText){
								richText.style = "width: auto;";
							}
						}, 500)
						
					})
				})
				.catch(err => {
					// console.log(err)
					if(err.response.ExceptionMessage.indexOf("请登录") != -1 && this.loginTimes < 10){
						this.loginTimes++
						loginAxios()
					}
				})
		},
		getDataTitle(i, id){
			let data = {
				SPNAME: TABLESP[i].sp
				// encrequestid: id
			};
			if(i == 8){
				data.EncRequestID = id
			}else{
				data.encrequestid = id
			}
			axios.post(API,{
					Data: JSON.stringify(data)
				}, {
					withCredentials: true
				})
				.then(res => {
					let response = JSON.parse(res.data)
					// console.log(response)
					if(response.length > 0){
						
						for(let j = 0; j < TABLESP[i].sName.length; j++){
							if(response[0][TABLESP[i].sName[j]] && response[0][TABLESP[i].sName[j]].trim()){
								this.title += response[0][TABLESP[i].sName[j]]
							}
						}
						// this.title = response[0][TABLESP[i].sName]
					}
				})
				.catch(err => {
					if(err.response.data.ExceptionMessage.indexOf("请登录") != -1 && this.loginTimes < 10){
						this.loginTimes++
						loginAxios()
					}
				})
		},
		matchingUrl(){
			let arr = location.href.split('encrequestid=')[1].split("&sp=");
			if(arr[0] && arr[1]){
				let encrequestid = decodeURIComponent(decodeURIComponent(arr[0]))
				this.getData(encrequestid)
				this.getDataTitle(arr[1],encrequestid)
				this.href = this.hrefHead + "&encrequestid=" + arr[0]
				
			}else{
				alert("缺少参数！")
			}
		},
	},
	async mounted() {
		await loginAxios()
		this.matchingUrl()
	}
})















