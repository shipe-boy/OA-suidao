// import axios from '../../utils/axios/axios.js'
import axios from 'axios'
const {API} = require('../api.js')
const {loginAxios} = require('../loginAxios.js')
export function globalAxios(api, data, fnSucess, fnErr){
	axios.post(api || API, {
			Data: JSON.stringify(data)
		}, {
			withCredentials: true
		})
		.then(res => {
			if(fnSucess){
				fnSucess(res)
			}
		})
		.catch((err) => {
			if(fnErr){
				fnErr(err)
			} else {
				console.log(err.response.data.ExceptionMessage)
				if(err.response.data.ExceptionMessage.indexOf("请登录") != -1){
					loginAxios()
				}
				// loginAxios()
			}
		})
}
/* export function loginAxios(){
	axios.post('http://jspt.stec.sh.cn/checkCAS')
	  .then(res => {
		let url = JSON.parse(res.data);
	
		if (url != "OK") {
			// alert(url)
			if(url.indexOf('127.0.0.1')> -1 || url.indexOf('localhost')> -1)return
			location.href = url;
		}else{
		}
	  })
	  .catch(err => {
		// console.log(err)
	  })
} */





