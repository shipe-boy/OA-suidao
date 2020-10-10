//+"&sp="+ 0
//sName: 标题名称多个字段拼接
export const TABLESP = [
	{sp: "XL_Project_IEAA_List", sName: ['ProjectName']}, //审批中项目管理 0
	{sp: "XL_Project_Done_List"},//项目信息列表 1
	{sp: "XL_Project_Alter_IEAA_List", sName: ['ProjectName']},//审批中项目变更管理 2
	{sp: "XL_Plan_Declare_List"},//方案计划申报 3
	{sp: "XL_SC_Declare_List"},//分包设置 4
	{sp: "XL_Solution_Declare_List"},//方案上报 5
	{sp: "XL_Solution_IEAA_List", sName: ['PlanName']},//审批中方案管理 6
	{sp: "XL_Solution_Done_List", sName: ['pname']},//统计下载管理（方案） 7
	{sp: "XL_Solution_Locked_List", sName: ['pname']},//锁定方案申请解锁 8  
	{sp: "XL_Solution_Locked_IEAA_List", sName: ['pname']},//审批中锁定方案 9
	{sp: "XL_ERS_Declare_List"},//专家评审方案申报 10
	{sp: "XL_ERS_IEAA_List", sName: ['ProgramNameText']},//审批中专家评审 11
	{sp: "XL_ERS_Done_List", sName: ['pname1']},//统计下载管理（专家评审后） 12
	{sp: "XL_CP_Declare_List"},//关键工序申请 13
	{sp: "XL_CP_Done_List", sName: ['pname', 'UnitEngineering', 'CheckPart', 'tname']},//统计下载管理（关键工序） 14
	{sp: "XL_CP_List", sName: ['pname', 'UnitEngineering', 'tname']},//全部查询（关键工序） 15
	{sp: "XL_COW_Declare_List"},//工程竣工申请 16
	{sp: "XL_COW_IEAA_List", sName: ['pname', 'UnitEngineering', 'tname']},//审批中工程竣工管理 17
	{sp: "XL_COW_Done_List", sName: ['pname', 'UnitEngineering', 'tname']},//统计下载管理（工程竣工） 18
	{sp: "XL_COW_List", sName: ['pname', 'UnitEngineering', 'tname']},//全部查询（工程竣工） 19
	{sp: "XL_OP_Declare_List"},//总体筹划申报 20
	{sp: "XL_OP_IEAA_List", sName: ['PlanName']},//审批中总体筹划管理 21
	{sp: "XL_OP_Done_List", sName: ['PlanName']},//统计下载管理（总体筹划） 22
	{sp: "XL_CP_IEAA_List", sName: ['pname', 'UnitEngineering', 'CheckPart', 'tname']}// 审批中关键工序管理 23
]













