import axios from 'axios'

export function loginAxios(){
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
}

export const LoginAxiosTimes = {
	data() {
		return {
			loginTimes: 0	//重复登陆次数
		}
	}
}