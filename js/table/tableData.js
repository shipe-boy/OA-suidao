// http://jspt.stec.sh.cn/OAIndex/tableDetails.html?
const {TABLESP} = require('../SP.js')
const Href = 'http://jspt.stec.sh.cn/OAIndex/tableDetails.html?'
//处理特殊字符
let reg = /[`~!@#$%^&*_\-+=<>?:"{}|,\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、 ]/gim; 


export let TableData = {
	//审批中项目管理 
	"ProjectManagement.jsp": {
		rowColor: true,
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader:[
			{name: '编号', colWidth: '92px'},
			{name: '项目名称', sName: 'ProjectName', colWidth: '431px'}, 
			{name: '管理单位', sName: 'subcompanyname', colWidth: '185px'}, 
			{name: '项目经理', sName: 'pmname', colWidth: '117px'}, 
			{name: '项目总工', sName: 'pename', colWidth: '117px'}, 
			{name: '发起日期', sName: 'createdate', colWidth: '117px'}, 
			{name: '地域', sName: 'xdy', colWidth: '118px'},
			{name: '发起人', sName: 'lastname', colWidth: '117px'},
			{name: '当前审批人', sName: 'noname', colWidth: '154px'}
		],
		addTableHeader: [
			{name: '操作',tdName: '', colWidth: '104px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'}, 
			{name: '', tdName: '流程', colWidth: '92px', href: Href}
		],
		data: {
			SPNAME: TABLESP[0].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '地域',
				value: '',
				sName: 'DY'
			},{
				name: '项目总工',
				value: '',
				sName: 'XMZG'
			},{
				name: '项目名称',
				value: '',
				sName: 'XMMC',
				menuList: []
			},{
				name: '发起人',
				value: '',
				sName: 'FQR'
			},{
				name: '项目经理',
				value: '',
				sName: 'XMJL'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"encrequestid=" + encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			//第二列--流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID)) +"&sp="+ 0;
			
			rowData.addTableHeader = tableOperate;
		}
	},
	//项目信息列表
	"ProjectInformation.jsp": {
		ProjectNameHref: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=8&formId=-163&opentype=0&customid=7&viewfrom=fromsearchlist&billid=',
		tableHreader: [
			{name: '编号', colWidth: '77px'},
			{name: '项目名称', sName: 'projectname', colWidth: '511px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '241px'}, 
			{name: '项目经理', sName: 'xmjl', colWidth: '134px'}, 
			{name: '项目总工', sName: 'xmzg', colWidth: '117px'}, 
			{name: '地域', sName: 'ProjectRegion', colWidth: '209px'}, 
			{name: '开工日期', sName: 'BeginDate', colWidth: '118px'},
			{name: '工程类型', sName: 'projecttypename', colWidth: '144px'},
			{name: '项目状态', sName: 'selectname', colWidth: '97px'}
		],
		addTableHeader: [],
		data: {
			SPNAME: TABLESP[1].sp,
			DATEEDITOR0: '',
			DATEEDITOR1: '',
			COMBOBOX3: '',
			GLDW2: ''
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '项目经理',
				value: '',
				sName: 'XMJL'
			},{
				name: '工程类型',
				value: '',
				sName: 'GCLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '轨道交通工程', value: "轨道交通工程"},
					{name: '越江通道工程', value: "越江通道工程"},
					{name: '道路桥梁工程', value: '道路桥梁工程'},
					{name: '房屋建筑工程', value: '房屋建筑工程'},
					{name: '市政道路隧道工程', value: '市政道路隧道工程'},
					{name: '机械设备制造', value: '机械设备制造'},
					{name: '机电设备安装工程', value: '机电设备安装工程'},
					{name: '水务水利工程', value: '水务水利工程'},
					{name: '能源工程', value: '能源工程'},
					{name: '构件生产', value: '构件生产'},
					{name: '装饰装修工程', value: '装饰装修工程'},
					{name: '混凝土生产', value: '混凝土生产'}
				]
			},{
				name: '项目名称',
				value: '',
				sName: 'XMMC',
				menuList: []
			},{
				name: '项目总工',
				value: '',
				sName: 'XMZG'
			},{
				name: '地域',
				value: '',
				sName: 'DY'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref + rowData.id
			
		}
	},
	//审批中项目变更管理
	"ProjectChangeInApproval.jsp": {
		rowColor: true,
		noMergeName: true,	//不合并项目名
		ProjectNameHref: "http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?",
		tableHreader:[
			{name: '编号', colWidth: '92px'},
			{name: '项目名称', sName: 'ProjectName', colWidth: '431px'}, 
			{name: '管理单位', sName: 'subcompanyname', colWidth: '185px'}, 
			{name: '项目经理', sName: 'pmname', colWidth: '117px'}, 
			{name: '项目总工', sName: 'pename', colWidth: '117px'}, 
			{name: '发起日期', sName: 'createdate', colWidth: '117px'}, 
			{name: '地域', sName: 'ProjectRegion', colWidth: '118px'},
			{name: '发起人', sName: 'lastname', colWidth: '117px'},
			{name: '当前审批人', sName: 'noname', colWidth: '154px'}
		],
		addTableHeader: [
			{name: '操作',tdName: '', colWidth: '104px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'}, 
			{name: '', tdName: '流程', colWidth: '92px', href: Href}
		],
		data: {
			SPNAME: TABLESP[2].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '地域',
				value: '',
				sName: 'DY'
			},{
				name: '项目总工',
				value: '',
				sName: 'XMZG'
			},{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},{
				name: '发起人',
				value: '',
				sName: 'FQR'
			},{
				name: '项目经理',
				value: '',
				sName: 'XMJL'
			},
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			//第二列--流程
			tableOperate[1].href = tableOperate[1].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 2;
			// console.log(tableOperate[0].tdName)
			rowData.addTableHeader = tableOperate;
			
		
		}
	},
	//方案计划申报
	"Schemeplandeclaration.jsp": {
		ProjectNameHref: "javascript:;",
		tableHreader: [
			{name: '编号', colWidth: '92px'},
			{name: '方案类别名称', sName: 'ProgramClassName', colWidth: '431px'}, 
			{name: '公司或项管部审批', sName: 'selectname', colWidth: '185px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '方案计划申报', colWidth: '104px', href: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?customTreeDataId=null&mainid=0&modeId=55&formId=-173&type=1'}
		],
		data: {
			SPNAME: TABLESP[3].sp,
			treeID: ''
		},
		showSearch: [],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//方案计划申报	ToFWID1
			if(rowData.flid === ''){
				tableOperate[0].href = tableOperate[0].href +"&field9930="+ rowData.ToFWID1;
			}else if(rowData.flid === '60' || rowData.flid === '24'){
				tableOperate[0].href = tableOperate[0].href +"&field9930="+ rowData.ToFWID;
			}else{
				tableOperate[0].href = tableOperate[0].href +"&field9930="+ rowData.ToFWID2;
			}
			
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//分包设置	
	"Subcontractingsetup.jsp": {
		ProjectNameHref: "http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=8&formId=-163&opentype=0&customid=7&viewfrom=fromsearchlist",
		ProjectNameHref1: "http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=55&formId=-173&opentype=0&customid=63&viewfrom=fromsearchlist",
		tableHreader: [
			{name: '编号', colWidth: '53px'},
			{name: '项目名称', sName: 'ProjectNameName', colWidth: '366px'}, 
			{name: '方案名称', sName: 'PlanName', colWidth: '524px'}, 
			{name: '管理单位', sName: 'pro', colWidth: '183px'}, 
			{name: '计划申报日期', sName: 'DeclareDate', colWidth: '141px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '142px'}, 
			{name: '距申报天数', sName: 'PlanDisDay', colWidth: '131px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '待分包', colWidth: '89px', href: 'javascript:;'}
		],
		data: {
			SPNAME: TABLESP[4].sp,
			COMBOBOX3: ''
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FNM'
			},
			{
				name: '计划申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '方案类别',
				value: '',
				sName: 'FALB'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '审批',
				value: '',
				sName: 'COMBOBOX2',
				menuList: [
					{name: '不选', value: ''},
					{name: '项管部', value: 0},
					{name: '公司', value: 1}
				]
			},
			// {
			// 	name: '排序',
			// 	value1: '顺序',
			// 	value2: '',
			// 	sName1: 'DESC',
			// 	sName2: 'OrderBy',
			// 	menu1List: [
			// 		{name: '顺序'},
			// 		{name: '逆序'}
			// 	],
			// 	menu2List: [
			// 		{name: '不选',sName: ''},
			// 		{name: '项目名称',sName: 'ProjectNameName'}, 
			// 		{name: '方案名称',sName: 'PlanName'}, 
			// 		{name: '管理单位',sName: 'pro'}, 
			// 		{name: '计划申报日期',sName: 'DeclareDate'}, 
			// 		{name: '计划实施日期',sName: 'ImplementDate'}
			// 	]
			// },
		],
		handleTableOperation(rowData){
			let day = Math.floor((new Date()-new Date(rowData.DeclareDate))/(1000*60*60*24))
			rowData.PlanDisDay = -day + "天" ;
			
			rowData.nameHref = this.ProjectNameHref +"&billid="+ rowData.did
			rowData.nameHref1 = {
				name: 'PlanName',
				href: this.ProjectNameHref1 +"&billid="+ rowData.id
			}
			
			
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			if(rowData.ProjectEngineer == rowData.uidqx || rowData.gly == 1 || rowData.modedatacreater == rowData.uidqx){
				tableOperate[0].tdName = "分包设置"
				tableOperate[0].href = "http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?customTreeDataId=null&mainid=0&modeId=56&formId=-174&type=1" + "&field13787=" + rowData.ProgramClassRightID + "&field9619=" + rowData.id
			}
			
			rowData.addTableHeader = tableOperate;
		
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//管理单位合并处理
					rowspan(item.childs, child, index, 'pro')
				})
			})
		}
	},
	//方案申报
	"Declarationofschemeplan.jsp": {
		ProjectNameHref: "http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=56&formId=-174&opentype=0&customid=64&viewfrom=fromsearchlist&billid=",
		tableHreader: [
			{name: '编号', colWidth: '78px'},
			{name: '方案名称', sName: 'PlanName', colWidth: '782px'}, 
			{name: '计划申报日期', sName: 'declaredate', colWidth: '147px'}, 
			{name: '管理单位', sName: 'pro', colWidth: '244px'}, 
			{name: '审批权限', sName: 'selectname', colWidth: '137px'}, 
			{name: '距申报天数', sName: 'PlanDisDay', colWidth: '122px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '待上报', colWidth: '122px', href: 'javascript:;'}
		],
		data: {
			SPNAME: TABLESP[5].sp,
			COMBOBOX3: ''
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FNM'
			},
			{
				name: '计划申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '方案类别',
				value: '',
				sName: 'FALB'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '审批',
				value: '',
				sName: 'COMBOBOX2',
				menuList: [
					{name: '不选', value: ''},
					{name: '项管部', value: 0},
					{name: '公司', value: 1}
				]
			}
			/* {
				name: '排序',
				value1: '顺序',
				value2: '',
				sName1: 'DESC',
				sName2: 'OrderBy',
				menu1List: [
					{name: '顺序'},
					{name: '逆序'}
				],
				menu2List: [
					{name: '不选',sName: ''},
					{name: '项目名称',sName: 'ProjectNameName'}, 
					{name: '方案名称',sName: 'PlanName'}, 
					{name: '管理单位',sName: 'pro'}, 
					{name: '计划申报日期',sName: 'declaredate'}, 
					{name: '计划实施日期',sName: 'ImplementDate'}
				]
			}, */
		],
		handleTableOperation(rowData){
			let day = Math.floor((new Date()-new Date(rowData.declaredate))/(1000*60*60*24))
			rowData.PlanDisDay = -day + "天";
			rowData.nameHref = this.ProjectNameHref + rowData.id
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			if((Number(rowData.OuterProjectEngineer) + Number(rowData.InterProjectEngineer) == rowData.uid) || (Number(rowData.IsOuterSubcontract) + Number(rowData.IsInterSubcontract) == 2) || rowData.IsAdmin == 1){
				tableOperate[0].tdName = "方案上报"
				tableOperate[0].href = "http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=226&isagent=0&beagenter=0&f_weaver_belongto_userid=" +'&field10419='+ rowData.id 
			}
			rowData.addTableHeader = tableOperate;
			
			
		
		}
	},
	//审批中方案管理
	"Projectmanagementinapproval.jsp": {
		rowColor: true,
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '61px'},
			{name: '方案名称', sName: 'PlanName', colWidth: '522px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '122px'}, 
			{name: '管理单位', sName: 'pro', colWidth: '184px'}, 
			{name: '审批权限', sName: 'selectname', colWidth: '92px'}, 
			{name: '上报人', sName: 'lastname', colWidth: '108px'}, 
			{name: '当前审批人', sName: 'noname', colWidth: '107px'}
		],
		addTableHeader: [
			{name: '操作',tdName: '', colWidth: '77px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'}, 
			{name: '', tdName: '流程', colWidth: '58px', href: Href}, 
			{name: '', tdName: '', colWidth: '59px', href: ''}
		],
		data: {
			SPNAME: TABLESP[6].sp,
			DATEEDITOR0: '',
			DATEEDITOR1: '',
			COMBOBOX3: '',
			GLDW2: ''
		},
		projectList: {},
		noMergeName: true,	//不合并项目名
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FAMC'
			},
			{
				name: '审批权限',
				value: '',
				sName: 'COMBOBOX2',
				menuList: [
					{name: '不选', value: ''},
					{name: '项管部', value: 0},
					{name: '公司', value: 1}
				]
			},
			/* {
				name: '排序',
				value1: '顺序',
				value2: '',
				sName1: 'DESC',
				sName2: 'OrderBy',
				menu1List: [
					{name: '顺序'},
					{name: '逆序'}
				],
				menu2List: [
					{name: '不选',sName: ''},
					{name: '方案名称',sName: 'PlanName'}, 
					{name: '实际申报日期',sName: 'createdate'}, 
					{name: '管理单位',sName: 'pro'}, 
					{name: '审批权限',sName: 'selectname'}, 
					{name: '上报人',sName: 'lastname'}, 
					{name: '当前审批人',sName: 'noname'}
				]
			}, */
			{
				name: '项目名称',
				value: '',
				sName: 'XMMC',
				menuList: []
			},
			{
				name: '方案类别',
				value: '',
				sName: 'FALB'
			},
			{
				name: '方案筛选',
				value: '',
				sName: 'TEST',
				menuList: [
					{name: '不选', value: ''},
					{name: '待处理', value: '待处理'},
					{name: '已处理', value: '已通过'}
				]
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
		],
		handleTableOperation: function(rowData){
			if(rowData.noname && rowData.noname.indexOf("潇凌_管理员") > -1 ){//当前审批人不显示----审批中方案管理
				let nameArr = rowData.noname.split("；")
				let arr = []
				nameArr.forEach(item => {
					if(item != "潇凌_管理员"){
						arr.push(item)
					}
				})
				rowData.noname = arr.join('；')
			}
			
			rowData.nameHref = this.ProjectNameHref + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			
			
			//操作列
			let addCol = [
				{name: '', tdName: '', colWidth: '58px',href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=280&isagent=0&beagenter=0&f_weaver_belongto_userid='},
				{name: '', tdName: '', colWidth: '77px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=252&isagent=0&beagenter=0&f_weaver_belongto_userid='}, 
				{name: '', tdName: '未晚报', colWidth: '58px', style: '', href: 'javascript:;'}
			]
			if(rowData.CanMan == 1 && this.addTableHeader.length <= 3){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//第二列--流程
			tableOperate[1].href = tableOperate[1].href + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 6;
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			
			//第三列--删除、删除审批、删除中
			if(rowData.CanMan == 1 || rowData.uid == rowData.creater){
				tableOperate[2].tdName = '删除'
				tableOperate[2].href = 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=254&isagent=0&beagenter=0&f_weaver_belongto_userid=&field11699='+ rowData.ABC +'&field11730=' + rowData.ABC + '&field11703=' + rowData.fanganid
			}
			if(rowData.dreqid && rowData.dreqid != 0){
				tableOperate[2].tdName = '删除中';
				// tableOperate[2].href = 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?' + '&requestid='+ rowData.dreqid;
				tableOperate[2].href = 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?' + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncDReqID));
			}
			if(rowData.DcanManageRequestID && rowData.DcanManageRequestID != 0){
				tableOperate[2].tdName = '删除审批';
				// tableOperate[2].href = 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?' + '&requestid='+ rowData.DcanManageRequestID;
				tableOperate[2].href = 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?' + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncDcanManageRequestID));
			}
			
			if(rowData.CanMan == 1){
				//第四列 --结束
				if(rowData.CanEnd == 2){
					tableOperate[3].tdName = '结束'
					tableOperate[3].href = tableOperate[3].href +'&field10171='+ rowData.ABC +'&field10479=' + rowData.ProgramPlanId
				}
				//第五列--晚报设置
				tableOperate[4].tdName = '晚报设置'
				tableOperate[4].href = tableOperate[4].href + '&field10171=' + rowData.requestid +'&field9647=' + rowData.ProgramPlanId + '&field10419=' + rowData.SubcontractSetID;
				//第六列	--晚报
				if(rowData.LateDay <= 0){
					tableOperate[5].tdName = '未晚报'
					tableOperate[5].style = 'color: #016ec0;'
				}else{
					if(rowData.BranchPassDate.trim() && rowData.LateSet.trim() ){
						tableOperate[5].tdName = '晚报'+rowData.LateDay+'天'
						tableOperate[5].style = 'color: red;'
					}else{
						tableOperate[5].style = 'color: #016ec0;'
					}
				}
				//五角星
				if(rowData.GJEndDate && rowData.GJEndDate.trim()){
					rowData.isStar = true
					rowData.startHref = 'http://oa.stec.sh.cn/ReportServer?reportlet=/shizu/GJGXApprovalList2.cpt&__bypagesize__=false&requestid='+rowData.bjreq;
				}
			}
			
			rowData.addTableHeader = tableOperate;
			
		}
	},
	//统计下载管理（方案）
	"Statisticaldownloads.jsp": {
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '63px'},
			{name: '方案名称', sName: 'pname', colWidth: '544px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '116px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '115px'}, 
			{name: '管理单位', sName: 'pro', colWidth: '247px'}, 
			{name: '审批完成时间', sName: 'EndDate', colWidth: '116px'}, 
			{name: '是否逾期', sName: 'isOverDay', colWidth: '80px'},
			{name: '修改次数', sName: 'rejectCount', colWidth: '80px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '方案', colWidth: '68px', href: "http://oa.stec.sh.cn/download.jsp?", isDownLoad: true}, 
			{name: '', tdName: '审批表', colWidth: '68px', href: "http://oa.stec.sh.cn/ReportServer?reportlet=/shizu/TD4.cpt"},
			{name: '', tdName: '流程', colWidth: '69px', href: Href}
		],
		data: {
			SPNAME: TABLESP[7].sp,
			COMBOBOX3: ''
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FNM'
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '审批',
				value: '',
				sName: 'COMBOBOX2',
				menuList: [
					{name: '不选', value: ''},
					{name: '项管部', value: 0},
					{name: '公司', value: 1}
				]
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '方案类别',
				value: '',
				sName: 'FALB'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '排序',
				value1: '顺序',
				value2: '',
				sName1: 'DESC',
				sName2: 'OrderBy',
				menu1List: [
					{name: '顺序'},
					{name: '逆序'}
				],
				menu2List: [
					{name: '不选',sName: ''},
					/* {name: '方案名称',sName: 'pname'}, 
					{name: '实际申报日期',sName: 'createdate'}, 
					{name: '计划实施日期',sName: 'ImplementDate'}, 
					{name: '管理单位',sName: 'pro'}, */
					{name: '审批完成时间',sName: 'EndDate'}
					// {name: '修改次数',sName: 'rejectCount'}
				]
			},
		],
		handleTableOperation(rowData){
			rowData.isOverDay = "否";
			rowData.nameHref = this.ProjectNameHref + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			
			
			//操作列
			let addCol = [
				{name: '', tdName: '修改名称', colWidth: '79px', href: "http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=302&isagent=0&beagenter=0&f_weaver_belongto_userid="}
			]
			if(rowData.CanMan == 1 && this.addTableHeader.length <= 3){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//第一列--方案
			tableOperate[0].href = tableOperate[0].href + '&requestid='+ rowData.ABC +"&fjname="+rowData.ProgramName2.replace(reg,'-');
			//第二列--审批表
			if(rowData.ATCount == '1' || rowData.ATCount == '0'){
				tableOperate[1].href = tableOperate[1].href + '&requestid='+ rowData.ABC;
			}else{
				tableOperate[1].href = "http://oa.stec.sh.cn/ReportServer?reportlet=/shizu/TD2.cpt" + '&requestid='+ rowData.ABC;
			}
			//第三列--流程
			tableOperate[2].href = tableOperate[2].href + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 7;
			//第四列--修改名称
			if(rowData.CanMan == 1){
				tableOperate[3].href = tableOperate[3].href + '&field11575='+ rowData.ProgramPlanId;
			}
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//锁定方案申请解锁	
	"LockManagement.jsp":{
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '61px'},
			{name: '方案名称', sName: 'pname', colWidth: '602px'}, 
			{name: '管理单位', sName: 'pro', colWidth: '228px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '159px'}, 
			{name: '上报人', sName: 'sbrname', colWidth: '116px'}, 
			{name: '锁定原因', sName: 'tuihuirqDay', colWidth: '174px'}, 
			{name: '锁定日期', sName: 'tuihuirq', colWidth: '158px'}
		],
		addTableHeader: [
			{name: '', tdName: '流程', colWidth: '69px', href: Href},
			{name: '操作', tdName: '待解锁', colWidth: '116px', href: 'javascript:;'}
		],
		data: {
			SPNAME: TABLESP[8].sp,
			XMM: '',
			FALB: '',
			JHSBRQ1: '',
			JHSBRQ2: ''
		},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FAM'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			}
		],
		handleTableOperation(rowData){
			rowData.tuihuirqDay = "修改期限超过10天"
			let dateTime = new Date(rowData.tuihuirq)
			dateTime=dateTime.setDate(dateTime.getDate()+10);
			dateTime=new Date(dateTime);
			rowData.tuihuirq = dateTime.toLocaleDateString().replace(/\//g,'-')
			
			rowData.nameHref = this.ProjectNameHref + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			// console.log(rowData.EncRequestID)
			//流程
			tableOperate[0].href = tableOperate[0].href + '&encrequestid='+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 8;
			
			//解锁
			if(rowData.CanMan == 1 || rowData.creater == rowData.uid){
				tableOperate[1].tdName = '申请解锁'
				tableOperate[1].href = "http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=236&isagent=0&beagenter=0&f_weaver_belongto_userid=" +'&field10842='+ rowData.faid +'&field10846=' + rowData.gldw +'&field9981=' + rowData.ABC
			}
			
			
			rowData.addTableHeader = tableOperate;
		}
	},
	//审批中锁定方案
	"ApprovalLockManagement.jsp": {
		rowColor: true,
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '43px'},
			{name: '锁定方案名称', sName: 'pname', colWidth: '970px'}, 
			{name: '申请人', sName: 'lastname', colWidth: '78px'}, 
			{name: '申请日期', sName: 'sqrq', colWidth: '108px'}, 
			{name: '申请单位', sName: 'pro', colWidth: '195px'}, 
			{name: '当前审批人', sName: 'noname', colWidth: '99px'}, 
		],
		addTableHeader: [
			{name: '操作',tdName: '', colWidth: '79px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'},
			{name: '', tdName: '流程', colWidth: '78px', href: Href}
		],
		data: {
			SPNAME: TABLESP[9].sp
		},
		showSearch: [
			{
				name: '锁定方案名称',
				value: '',
				sName: 'SDFAMC'
			},
			{
				name: '申请日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '申请单位',
				value: '',
				sName: 'SQDW'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"&requestid="+ rowData.requestId;
				// tableOperate[0].href = tableOperate[0].href +"&encrequestid=" + encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			//第二列--流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID)) +"&sp="+ 9;
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//专家评审方案申报
	"ApplicationofExpertAssessmentScheme.jsp": {
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '73px'},
			{name: '方案名称', sName: 'pname', colWidth: '683px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '290px'}, 
			{name: '实际申报日期', sName: 'ActualDeclareDate', colWidth: '198px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '198px'} 
		],
		addTableHeader: [
			{name: '操作', tdName: '待上报', colWidth: '197px', href: 'javascript:;'}
		],
		data: {
			SPNAME: TABLESP[10].sp
		},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FAM'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR2',
				sName2: 'DATEEDITOR3'
			},
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID)) 
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			if(!(rowData.uidqx != rowData.cjz && rowData.gly != 1) ){
				tableOperate[0].tdName = '方案上报'
				tableOperate[0].href = "http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=255&isagent=0&beagenter=0&f_weaver_belongto_userid=" + '&field14124=' + rowData.ABC + "&field10187=" + rowData.id ;
			}
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//审批中专家评审
	"ProgramManagementinExpertApproval.jsp": {
		rowColor: true,
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '81px'},
			{name: '方案名称', sName: 'ProgramNameText', colWidth: '403px'}, 
			{name: '管理单位', sName: 'subcompanyname', colWidth: '202px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '202px'}, 
			{name: '上报人', sName: 'lastname', colWidth: '154px'}, 
			{name: '当前审批人', sName: 'noname', colWidth: '201px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '', colWidth: '129px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'},
			{name: '操作', tdName: '流程', colWidth: '138px', href: Href}
		],
		data: {
			SPNAME: TABLESP[11].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FAMC'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '方案筛选',
				value: '',
				sName: 'TEST',
				menuList: [
					{name: '不选', value: ''},
					{name: '待处理', value: '待处理'}
				]
			},
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			
			
			
			//操作列
			let addCol = [
				{name: '操作', tdName: '', colWidth: '128px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=261&isagent=0&beagenter=0&f_weaver_belongto_userid='}
			]
			if(rowData.CanMan == 1 && this.addTableHeader.length <= 2){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//第二列 流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 11;
			
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			}
			//第三列--删除
			if(rowData.CanMan == 1){
				// if(rowData.uid == rowData.creater){
					tableOperate[2].tdName = '删除'
					tableOperate[2].href = tableOperate[2].href +"&field10493="+ rowData.requestId;
				// }
			}
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//统计下载管理（专家评审后）
	"ExpertapprovalStatisticsDownload.jsp": {
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '77px'},
			{name: '方案名称', sName: 'pname1', colWidth: '415px'}, 
			{name: '管理单位', sName: 'subcompanyname', colWidth: '199px'}, 
			{name: '计划申报日期', sName: 'DeclareDate', colWidth: '175px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '169px'}, 
			{name: '审批完成时间', sName: 'EndDate', colWidth: '168px'}, 
			{name: '修改次数', sName: 'rejectCount', colWidth: '121px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '方案', colWidth: '96px', href: 'http://oa.stec.sh.cn/download.jsp?', isDownLoad: true}, 
			{name: '', tdName: '审批表', colWidth: '109px', href: 'http://oa.stec.sh.cn/ReportServer?reportlet=/shizu/ZJTD.cpt'}, 
			{name: '', tdName: '流程', colWidth: '96px', href: Href}
		],
		data: {
			SPNAME: TABLESP[12].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '方案名称',
				value: '',
				sName: 'FAMC'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//方案
			tableOperate[0].href = tableOperate[0].href + "&requestid=" + rowData.requestId + "&fjname=" + rowData.pname1.replace(reg,'-');
			//审批表
			tableOperate[1].href = tableOperate[1].href + "&requestid=" + rowData.requestId;
			// tableOperate[1].href = tableOperate[1].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			//流程
			tableOperate[2].href = tableOperate[2].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 12;
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//关键工序申请
	"Declarationofacceptanceofkeyprocessplan.jsp": {
		ProjectNameHref: 'javascript:;',
		addButton: {
			text: '添加验收申请',
			href: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?customTreeDataId=null&mainid=0&modeId=64&formId=-190&type=1'
		},
		tableHreader: [
			{name: '编号', colWidth: '58px'},
			{name: '项目名称', sName: 'pname', colWidth: '297px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '191px'}, 
			{name: '验收部位', sName: 'CheckPart', colWidth: '218px'}, 
			{name: '验收类型', sName: 'tname', colWidth: '143px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '143px'}, 
			{name: '计划验收日期', sName: 'CheckDate', colWidth: '143px'},
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '143px'},
			{name: '距验收天数', sName: 'PlanDisDay', colWidth: '108px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '查看详情', colWidth: '105px', href: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=64&formId=-190&opentype=0&customid=74&viewfrom=fromsearchlist'}, 
			{name: '', tdName: '待申请', colWidth: '104px', href: 'javascript:;'}
		],
		data: {
			SPNAME: TABLESP[13].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			
			{
				name: '验收部位',
				value: '',
				sName: 'YSBW'
			},
			{
				name: '计划验收日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '单位工程',
				value: '',
				sName: 'YSMC'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '验收类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '围护首件制', value: '围护首件制'},
					{name: '深基坑开挖', value: '深基坑开挖'},
					{name: '盾构（顶管）出洞', value: '盾构（顶管）出洞'},
					{name: '盾构（顶管）进洞', value: '盾构（顶管）进洞'},
					{name: '联络通道开挖', value: '联络通道开挖'},
					{name: '钻爆法首次开挖', value: '钻爆法首次开挖'},
					{name: '围岩等级突变处开挖', value: '围岩等级突变处开挖'},
					{name: '浅埋段隧道开挖', value: '浅埋段隧道开挖'}
				]
			}
		],
		handleTableOperation(rowData){
			let day = Math.floor((new Date()-new Date(rowData.CheckDate))/(1000*60*60*24))
			rowData.PlanDisDay = -day + "天"
			
			rowData.nameHref = this.ProjectNameHref
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//查看详情
			tableOperate[0].href = tableOperate[0].href +"&billid="+ rowData.id +"&pid="+ rowData.ProjectName;
			//申请验收
			if(!(rowData.IsSubcontract == 0 && rowData.dlr != rowData.xmjl && rowData.gly != 1) || !(rowData.IsSubcontract == 1 && rowData.dlr != rowData.SubcontractPM && rowData.gly != 1)){
				tableOperate[1].tdName = "申请验收";
				tableOperate[1].href = "http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=214&isagent=0&beagenter=0&f_weaver_belongto_userid=" +"&field10067="+ rowData.id +"&pjid="+ rowData.ProjectName;
			}
			
			rowData.addTableHeader = tableOperate;
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
					rowspan(item.childs, child, index, 'CheckPart')
				})
			})
		}
	},
	//统计下载管理（关键工序）
	"KeyProcessStatisticsDownloadManagement.jsp": {
		ProjectNameHref: 'javascript:;',
		tableHreader: [
			{name: '编号', colWidth: '48px'},
			{name: '项目名称', sName: 'pname', colWidth: '483px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '192px'}, 
			{name: '验收部位', sName: 'CheckPart', colWidth: '114px'}, 
			{name: '验收类型', sName: 'tname', colWidth: '100px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '141px'}, 
			{name: '实际申报日期', sName: 'CheckDate', colWidth: '122px'},
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '121px'},
			{name: '审批完成时间', sName: 'EndDate', colWidth: '121px'},
			{name: '修改次数', sName: 'rejectCount', colWidth: '88px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '下载', colWidth: '61px', href: 'http://oa.stec.sh.cn/download.jsp?', isDownLoad: true}, 
			{name: '', tdName: '流程', colWidth: '60px', href: Href}
		],
		data: {
			SPNAME: TABLESP[14].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '验收部位',
				value: '',
				sName: 'YSBW'
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '单位工程',
				value: '',
				sName: 'YSMC'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '验收类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '围护首件制', value: '围护首件制'},
					{name: '深基坑开挖', value: '深基坑开挖'},
					{name: '盾构（顶管）出洞', value: '盾构（顶管）出洞'},
					{name: '盾构（顶管）进洞', value: '盾构（顶管）进洞'},
					{name: '联络通道开挖', value: '联络通道开挖'},
					{name: '钻爆法首次开挖', value: '钻爆法首次开挖'},
					{name: '围岩等级突变处开挖', value: '围岩等级突变处开挖'},
					{name: '浅埋段隧道开挖', value: '浅埋段隧道开挖'}
				]
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//下载pname    CheckName1
			tableOperate[0].href = tableOperate[0].href +"requestid="+ rowData.requestid+"&fjname="+ rowData.pname.replace(reg,'-');
			//流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 14;
			
			
			rowData.addTableHeader = tableOperate;
		
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
					rowspan(item.childs, child, index, 'CheckPart')
				})
			})
		}
	},
	//全部查询（关键工序）
	"Keyprocessplanview.jsp": {
		ProjectNameHref: 'javascript:;',
		tableHreader: [
			{name: '编号', colWidth: '72px'},
			{name: '项目名称', sName: 'pname', colWidth: '412px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '206px'}, 
			{name: '验收部位', sName: 'CheckPart', colWidth: '221px'}, 
			{name: '验收类型', sName: 'tname', colWidth: '129px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '153px'}, 
			{name: '计划验收日期', sName: 'CheckDate', colWidth: '128px'},
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '129px'},
			{name: '状态', sName: 'ztname', colWidth: '98px'},
		],
		addTableHeader: [
			{name: '操作', tdName: '查看详情', colWidth: '98px', href: 'http://oa.stec.sh.cn/formmode/view/AddFormModeIframe.jsp?isPreview=1&modeId=64&formId=-190&type=0&layoutid=345'}
		],
		data: {
			SPNAME: TABLESP[15].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '验收类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '围护首件制', value: '围护首件制'},
					{name: '深基坑开挖', value: '深基坑开挖'},
					{name: '盾构（顶管）出洞', value: '盾构（顶管）出洞'},
					{name: '盾构（顶管）进洞', value: '盾构（顶管）进洞'},
					{name: '联络通道开挖', value: '联络通道开挖'},
					{name: '钻爆法首次开挖', value: '钻爆法首次开挖'},
					{name: '围岩等级突变处开挖', value: '围岩等级突变处开挖'},
					{name: '浅埋段隧道开挖', value: '浅埋段隧道开挖'}
				]
			},
			{
				name: '验收部位',
				value: '',
				sName: 'YSBW'
			},
			{
				name: '计划验收日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '状态',
				value: '',
				sName: 'ZT',
				menuList: [
					{name: '不选', value: ''},
					{name: '待上报', value: '待上报'},
					{name: '审批中', value: '审批中'},
					{name: '已完成', value: '已完成'}
				]
			},
			{
				name: '单位工程',
				value: '',
				sName: 'DWGC'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR2',
				sName2: 'DATEEDITOR3'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//查看详情
			if(rowData.ztname == "待上报"){
				tableOperate[0].href = tableOperate[0].href +"&billid="+ rowData.id;
			}else{
				tableOperate[0].href = "http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?" +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			
			rowData.addTableHeader = tableOperate;
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
					rowspan(item.childs, child, index, 'CheckPart')
				})
			})
		}
	},
	//工程竣工申请 
	"AcceptanceandAcceptanceDeclarationofCompletionPlan.jsp": {
		ProjectNameHref: 'javascript:;',
		addButton: {
			text: '添加验收申请',
			href: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?customTreeDataId=null&mainid=0&modeId=66&formId=-197&type=1'
		},
		tableHreader: [
			{name: '编号', colWidth: '59px'},
			{name: '项目名称', sName: 'pname', colWidth: '379px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '234px'}, 
			{name: '竣工类型', sName: 'tname', colWidth: '175px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '175px'}, 
			{name: '计划验收日期', sName: 'CheckDate', colWidth: '146px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '146px'},
			{name: '距验收天数', sName: 'ysts', colWidth: '111px'},
		],
		addTableHeader: [
			{name: '操作', tdName: '查看详情', colWidth: '111px', href: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=66&formId=-197&opentype=0&customid=76&viewfrom=fromsearchlist'}, 
			{name: '', tdName: '待上报', colWidth: '111px', href: 'javascript:;'}
		],
		data: {
			SPNAME: TABLESP[16].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '竣工类型',
				value: '',
				sName: 'JGLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '单位工程竣工验收', value: '单位工程竣工验收'},
					{name: '工程项目竣工验收', value: '工程项目竣工验收'}
				]
			},
			{
				name: '计划验收日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '单位工程',
				value: '',
				sName: 'YSMC'
			},
			
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//查看详情
			tableOperate[0].href = tableOperate[0].href +"&billid="+ rowData.id;
			//申请验收 
			if((rowData.IsSubcontract == 0 && rowData.ProjectEngineer == rowData.uidqx) || (rowData.IsSubcontract == 1 && rowData.SubcontractPE == rowData.uidqx) || rowData.gly === 1){
				tableOperate[1].tdName = "申请验收"
				tableOperate[1].href = "http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=210&isagent=0&beagenter=0&f_weaver_belongto_userid=" +"&field10108="+ rowData.id;
			}
			rowData.addTableHeader = tableOperate;
		
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
				})
			})
		}
	},
	//审批中工程竣工管理
	"ManagementofAcceptanceandAcceptanceofCompletioninExaminationandApproval.jsp": {
		rowColor: true,
		fontcolor: true,	//字体颜色
		ProjectNameHref: 'javascript:;',
		tableHreader: [
			{name: '编号', colWidth: '68px'},
			{name: '项目名称', sName: 'pname', colWidth: '363px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '182px'}, 
			{name: '竣工类型', sName: 'tname', colWidth: '136px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '136px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '137px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '136px'},
			{name: '上报人', sName: 'lastname', colWidth: '113px'},
			{name: '当前审批人', sName: 'noname', colWidth: '114px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '', colWidth: '86px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'}, 
			{name: '', tdName: '流程', colWidth: '87px', href: Href}
		],
		data: {
			SPNAME: TABLESP[17].sp,
			TEST: '',
			YSMC: ''
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '竣工类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '单位工程竣工验收', value: '单位工程竣工验收'},
					{name: '工程项目竣工验收', value: '工程项目竣工验收'}
				]
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '单位工程',
				value: '',
				sName: 'DWGC'
			},
			
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			}
			/* {
				name: '方案状态',
				value: '',
				sName: 'TEST'
			} */
		],
		handleTableOperation(rowData){
			
			rowData.nameHref = this.ProjectNameHref
			
			
			//操作列
			let addCol = [
				{name: '', tdName: '', colWidth: '86px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=264&isagent=0&beagenter=0&f_weaver_belongto_userid='}
			]
			if(rowData.uidadmin == 1 && this.addTableHeader.length <= 2){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			
			
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			//流程
			tableOperate[1].href = tableOperate[1].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 17;
			//删除
			if(rowData.uidadmin == 1){
				tableOperate[2].tdName = '删除';
				tableOperate[2].href = tableOperate[2].href+ rowData.ABC +'&field10497=' + rowData.requestid;
			}
			
			rowData.addTableHeader = tableOperate;
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
				})
			})
		}
	},
	//统计下载管理（工程竣工）
	"StatisticalDownloadManagementofProjectCompletion.jsp": {
		ProjectNameHref: 'javascript:;',
		tableHreader: [
			{name: '编号', colWidth: '66px'},
			{name: '项目名称', sName: 'pname', colWidth: '379px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '189px'}, 
			{name: '竣工类型', sName: 'tname', colWidth: '142px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '143px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '142px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '142px'},
			{name: '审批完成时间', sName: 'EndDate', colWidth: '142px'},
			{name: '修改次数', sName: 'rejectCount', colWidth: '118px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '下载', colWidth: '90px', href: 'http://oa.stec.sh.cn/download.jsp?', isDownLoad: true},
			{name: '', tdName: '流程', colWidth: '90px', href: Href}
		],
		data: {
			SPNAME: TABLESP[18].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '竣工类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '单位工程竣工验收', value: '单位工程竣工验收'},
					{name: '工程项目竣工验收', value: '工程项目竣工验收'}
				]
			},
			{
				name: '计划验收日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '单位工程',
				value: '',
				sName: 'YSMC'
			},
			
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//下载
			tableOperate[0].href = tableOperate[0].href +"requestid="+ rowData.requestId +"&fjname="+ rowData.cname.replace(reg,'-');
			//流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 18;
			
			
			rowData.addTableHeader = tableOperate;
		
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
				})
			})
		}
	},
	//全部查询（工程竣工）
	"InspectionofCompletionAcceptancePlan.jsp":{
		ProjectNameHref: 'javascript:;',
		tableHreader: [
			{name: '编号', colWidth: '72px'},
			{name: '项目名称', sName: 'pname', colWidth: '387px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '237px'}, 
			{name: '竣工类型', sName: 'tname', colWidth: '179px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '178px'}, 
			{name: '计划验收日期', sName: 'CheckDate', colWidth: '179px'}, 
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '178px'},
			{name: '状态', sName: 'ztname', colWidth: '113px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '查看详情', colWidth: '113px', href: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=66&formId=-197&opentype=0&customid=76&viewfrom=fromsearchlist'}
		],
		data: {
			SPNAME: TABLESP[19].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '竣工类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '单位工程竣工验收', value: '单位工程竣工验收'},
					{name: '工程项目竣工验收', value: '工程项目竣工验收'}
				]
			},
			{
				name: '计划验收日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR2',
				sName2: 'DATEEDITOR3'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '状态',
				value: '',
				sName: 'ZT',
				menuList: [
					{name: '不选', value: ''},
					{name: '待上报', value: '待上报'},
					{name: '审批中', value: '审批中'},
					{name: '已完成', value: '已完成'}
				]
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '单位工程',
				value: '',
				sName: 'DWGC'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//查看详情
			if(rowData.ztname == "待上报"){
				tableOperate[0].href = tableOperate[0].href +"&billid="+ rowData.id;
			}else{
				tableOperate[0].href = "http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?" +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			
			rowData.addTableHeader = tableOperate;
		
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
				})
			})
		}
	},
	//总体筹划申报
	"ConstructionPlan.jsp": {
		ProjectNameHref: 'http://oa.stec.sh.cn/formmode/view/AddFormMode.jsp?type=0&modeId=8&formId=-163&opentype=0&customid=7&viewfrom=fromsearchlist',
		tableHreader: [
			{name: '编号', colWidth: '90px'},
			{name: '项目名称', sName: 'ProjectName', colWidth: '599px'}, 
			{name: '管理单位', sName: 'subcompanyname', colWidth: '282px'}, 
			{name: '项目地域', sName: 'ProjectRegion', colWidth: '244px'}, 
			{name: '项目经理', sName: 'pmname', colWidth: '157px'},
			{name: '项目总工', sName: 'pename', colWidth: '137px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '总体筹划申报', colWidth: '138px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=333&isagent=0&beagenter=0&f_weaver_belongto_userid='}
		],
		data: {
			SPNAME: TABLESP[20].sp
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '项目地域',
				value: '',
				sName: 'DY'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref + "&billid=" + rowData.id
			
			
			//操作列
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//总体筹划申报
			tableOperate[0].href = tableOperate[0].href +"&field12486="+ rowData.id;
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	//审批中总体筹划管理		
	"ConstructionPlanningApproval.jsp": {
		rowColor: true,
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '70px'},
			{name: '工程总体筹划名称', sName: 'PlanName', colWidth: '432px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '136px'}, 
			{name: '申报日期', sName: 'createdate', colWidth: '135px'}, 
			{name: '审批权限', sName: 'selectname', colWidth: '135px'},
			{name: '上报人', sName: 'lastname', colWidth: '135px'},
			{name: '当前审批人', sName: 'noname', colWidth: '141px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '', colWidth: '103px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'},
			{name: '', tdName: '流程', colWidth: '76px', href: Href}
		],
		data: {
			SPNAME: TABLESP[21].sp,
			DATEEDITOR0: '',
			DATEEDITOR1: ''
		},
		// projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '筹划名称',
				value: '',
				sName: 'SGCHMC'
			},
			{
				name: '审批权限',
				value: '',
				sName: 'CHLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '项管部', value: "项管部"},
					{name: '公司', value: "公司"}
				]
			},
			{
				name: '申报日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			}
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			
			
			//操作列
			let addCol = [
				{name: '', tdName: '', colWidth: '75px', href: ' http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=335&isagent=0&beagenter=0&f_weaver_belongto_userid='},
				{name: '', tdName: '晚报设置', colWidth: '103px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=337&isagent=0&beagenter=0&f_weaver_belongto_userid='},
				{name: '', tdName: '', colWidth: '103px', href: 'javascript:;'}
			]
			if(rowData.gly == 1 && this.addTableHeader.length <= 2){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//第二列--流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 21;
			
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"&encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))
			}
			
			
			if(rowData.gly == 1){
				//第三列--删除
				if(rowData.gly == 1 || rowData.uidqx == rowData.creater){
					tableOperate[2].tdName = '删除'
					tableOperate[2].href = tableOperate[2].href +'&field12616='+ rowData.ABC +'&field12486=' + rowData.ProjectID;
				}
				//第四列--晚报设置
				tableOperate[3].href = tableOperate[3].href + '&field12616=' + rowData.ABC +'&field12486=' + rowData.ProjectID;
				//第五列	--晚报
				if(!(rowData.wbrq < 0 || rowData.ActualStartDate.trim())){
					tableOperate[4].tdName = '未晚报'
					tableOperate[4].style = 'color: #016ec0;'
				}else{
					tableOperate[4].tdName = '晚报'+rowData.wbrq+'天'
					tableOperate[4].style = 'color: red;'
				}
			}
			
			
			rowData.addTableHeader = tableOperate;
			
			
		
		}
	},
	//统计下载管理（总体筹划）
	"PlanningStatisticalDownload.jsp": {
		ProjectNameHref: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?',
		tableHreader: [
			{name: '编号', colWidth: '78px'},
			{name: '工程总体筹划名称', sName: 'PlanName', colWidth: '467px'}, 
			{name: '管理单位', sName: 'gldw', colWidth: '194px'}, 
			{name: '实际申报日期', sName: 'createdate', colWidth: '202px'}, 
			{name: '审批完成日期', sName: 'EndDate', colWidth: '202px'},
			{name: '修改次数', sName: 'rejectCount', colWidth: '118px'},
			{name: '变更次数', sName: 'ChangeDay', colWidth: '148px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '下载', colWidth: '109px', href: 'http://oa.stec.sh.cn/download.jsp?', isDownLoad: true},
			{name: '', tdName: '流程', colWidth: '109px', href: Href}
		],
		data: {
			SPNAME: TABLESP[22].sp
		},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '筹划名称',
				value: '',
				sName: 'SGCHMC'
			},
			{
				name: '审批完成日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR2',
				sName2: 'DATEEDITOR3'
			}
		],
		handleTableOperation(rowData){
			if(rowData.Change - 1 > 0){
				rowData.ChangeDay = "第"+(rowData.Change - 1) +"次变更"
			}else{
				rowData.ChangeDay = "";
			}
			
			
			rowData.nameHref = this.ProjectNameHref +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			
			//操作列
			let addCol = [
				{name: '', tdName: '', colWidth: '109px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=333&isagent=0&beagenter=0&f_weaver_belongto_userid='}
			]
			if((rowData.gly == 1 || rowData.uidqx == rowData.creater) && this.addTableHeader.length <= 2){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			//下载
			tableOperate[0].href = tableOperate[0].href +"requestid="+ rowData.requestid +"&fjname="+ rowData.PlanName.replace(reg,'-');
			//流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 22;
			//变更
			if(rowData.gly == 1 || rowData.uidqx == rowData.creater){
				tableOperate[2].tdName = '变更'
				tableOperate[2].href = tableOperate[2].href +"&field12822="+ rowData.id +"&field12486="+ rowData.ProjectID;
			}
			
			
			rowData.addTableHeader = tableOperate;
		
		}
	},
	// 审批中关键工序管理
	"AcceptanceandAcceptanceManagementofKeyProcessesinExaminationandApproval.jsp": {
		rowColor: true,
		ProjectNameHref: 'javascript:;',
		tableHreader: [
			{name: '编号', colWidth: '46px'},
			{name: '项目名称', sName: 'pname', colWidth: '373px'}, 
			{name: '单位工程', sName: 'UnitEngineering', colWidth: '179px'}, 
			{name: '验收部位', sName: 'CheckPart', colWidth: '175px'}, 
			{name: '验收类型', sName: 'tname', colWidth: '127px'},
			{name: '管理单位', sName: 'gldw', colWidth: '133px'},
			{name: '实际申报日期', sName: 'fcreatedate', colWidth: '118px'},
			{name: '计划实施日期', sName: 'ImplementDate', colWidth: '118px'},
			{name: '上报人', sName: 'lastname', colWidth: '89px'},
			{name: '当前审批人', sName: 'noname', colWidth: '100px'}
		],
		addTableHeader: [
			{name: '操作', tdName: '', colWidth: '78px', href: 'http://oa.stec.sh.cn/workflow/request/NewViewRequest.jsp?'},
			{name: '', tdName: '流程', colWidth: '57px', href: Href}
		],
		data: {
			SPNAME: TABLESP[23].sp,
			TEST: ''
		},
		projectList: {},
		showSearch: [
			{
				name: '管理单位',
				value: '',
				sName: 'GLDW',
				menuList: [
					{name: '不选', value: ''},
					{name: '地基基础工程分公司', value: "地基基础工程分公司"},
					{name: '盾构工程分公司', value: "盾构工程分公司"},
					{name: '福州总承包部', value: '福州总承包部'},
					{name: '构件分公司', value: '构件分公司'},
					{name: '轨道交通工程项目管理部', value: '轨道交通工程项目管理部'},
					{name: '河南分公司', value: '河南分公司'},
					{name: '机械制造分公司', value: '机械制造分公司'},
					{name: '江苏分公司', value: '江苏分公司'},
					{name: '昆明分公司', value: '昆明分公司'},
					{name: '南京地铁5号线总承包部', value: '南京地铁5号线总承包部'},
					{name: '市政公用工程设计研究院', value: '市政公用工程设计研究院'},
					{name: '市政建筑工程项目管理部', value: '市政建筑工程项目管理部'},
					{name: '台州分公司', value: '台州分公司'},
					{name: '越江工程项目管理部', value: '越江工程项目管理部'},
					{name: '浙江分公司', value: '浙江分公司'},
					{name: '广东分公司', value: '广东分公司'},
					{name: '杭绍台（台州段）总承包部', value: '杭绍台（台州段）总承包部'},
					{name: '协作单位', value: '协作单位'},
					{name: '上海隧道地基基础工程有限公司', value: '上海隧道地基基础工程有限公司'}
				]
			},
			{
				name: '验收部位',
				value: '',
				sName: 'YSBW'
			},
			{
				name: '实际申报日期',
				value1: '',
				value2: '',
				sName1: 'JHSBRQ1',
				sName2: 'JHSBRQ2'
			},
			{
				name: '项目名称',
				value: '',
				sName: 'XMM',
				menuList: []
			},
			{
				name: '单位工程',
				value: '',
				sName: 'YSMC'
			},
			{
				name: '计划实施日期',
				value1: '',
				value2: '',
				sName1: 'DATEEDITOR0',
				sName2: 'DATEEDITOR1'
			},
			{
				name: '验收类型',
				value: '',
				sName: 'YSLX',
				menuList: [
					{name: '不选', value: ''},
					{name: '围护首件制', value: '围护首件制'},
					{name: '深基坑开挖', value: '深基坑开挖'},
					{name: '盾构（顶管）出洞', value: '盾构（顶管）出洞'},
					{name: '盾构（顶管）进洞', value: '盾构（顶管）进洞'},
					{name: '联络通道开挖', value: '联络通道开挖'},
					{name: '钻爆法首次开挖', value: '钻爆法首次开挖'},
					{name: '围岩等级突变处开挖', value: '围岩等级突变处开挖'},
					{name: '浅埋段隧道开挖', value: '浅埋段隧道开挖'}
				]
			},
			/* {
				name: '方案状态',
				value: '',
				sName: 'TEST'
			}, */
			
		],
		handleTableOperation(rowData){
			rowData.nameHref = this.ProjectNameHref
			
			//操作列
			let addCol = [
				{name: '', tdName: '', colWidth: '57px', href: 'http://oa.stec.sh.cn/workflow/request/AddRequest.jsp?workflowid=263&isagent=0&beagenter=0&f_weaver_belongto_userid='}
			]
			if(rowData.uidadmin == 1 && this.addTableHeader.length <= 2){
				
				for(let i = 0; i < addCol.length; i++){
					this.addTableHeader.push(addCol[i])
				}
				
			}
			let tableOperate = JSON.parse(JSON.stringify(this.addTableHeader))
			
			//第一列  申请审批 和 ""
			if(rowData.canManageRequestID != 0){
				tableOperate[0].tdName = '申请审批';
				tableOperate[0].href = tableOperate[0].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID));
			}
			//第二列 流程
			tableOperate[1].href = tableOperate[1].href +"encrequestid="+ encodeURIComponent(encodeURIComponent(rowData.EncRequestID))+"&sp="+ 23;
			
			// 第三列 删除  uidadmin
			if(rowData.uidadmin == 1 ){
				tableOperate[2].tdName = '删除'
				tableOperate[2].href = tableOperate[2].href + "&field10067=" + rowData.CheckName +'&field10495=' + rowData.requestId;
			}
			
			
			
			rowData.addTableHeader = tableOperate;
		
		},
		handleMergeCol(tableData){
			tableData.forEach(item => {
				item.childs.forEach((child, index) => {
					//合并处理
					rowspan(item.childs, child, index, 'UnitEngineering')
					rowspan(item.childs, child, index, 'CheckPart')
					
				})
			})
		}
	}
}

//合并单元格
function rowspan(childs, child, index, name){
	if(index == 0){
		child[name] = [child[name]]
	}else{
		for(let i = index - 1; i >= 0; i--){
			if(childs[i][name].length > 0){
				if(child[name] == childs[i][name][0]){ //一样
					childs[i][name].push("")
					child[name] = []
					break
				}else{	//不一样
					child[name] = [child[name]]
					break
				}
			}
		}
	}
}






