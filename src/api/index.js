import axios from 'axios';
import UtilVar from "../utils/stacts";
import { useRouter} from 'vue-router'
const router = useRouter();
let baseUrl = '';
if(process.env.NODE_ENV==="production"){
    if(process.env.VUE_APP_FLAG==="pro"){
        baseUrl = UtilVar.baseUrl;  // 正式环境 || 生产环境
    }else if(process.env.VUE_APP_FLAG==="test"){
        baseUrl= UtilVar.testUrl  ;// 测试环境
    }
}else{
    baseUrl ="http://locahost";   
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 传token
    let token =sessionStorage.getItem("usertoken");
    config.headers.common['Content-Type'] ="application/json;charset=utf-8";
    config.headers.common['token'] =token;  //Authorization

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
/**
 * @响应拦截
 */
axios.interceptors.response.use(response => {
    /**
     * @code 1011登录过期 token验证失败 根据后端调 
     */
    if (response&&response.data && response.data.code == 1011) { 
        router.push('login');
        return
    }
  
    return response
}, error => {
    return Promise.reject(error)
})

export const GET = (url,params)=>{
    // console.log(`${baseUrl}${url}`)
    return axios.get(`${baseUrl}${url}`,{params:params})
        .then((data) => {
            return data
        })
}

export const POST = (url,params)=>{
    // console.log(params)
    return axios.post(`${baseUrl}${url}`,params)
        .then((data) => {
            return data
        }).catch((error)=>{
            return error
        })
}
/**
 * @POSTTime @GETTime @第三个参数延时时间
 * @param {String} url  路径
 * @param {Object} params 参数{}
 * @param {String} time  延时时间
 */
export const POSTTime = (url,params,time)=>{

    // console.log(params)
    return axios.post(`${baseUrl}${url}`,params,{timeout:time})
        .then((data) => {
            return data
        }).catch((error)=>{
            return error
        })
}
export const GETTime = (url,params,time)=>{

    // console.log(params)
    return axios({
        url:`${baseUrl}${url}`,
        method:'get',
        timeout:time,
        params:params
    }).then(res=>{
        return res;
    })
}

/**
 * @文件类型提交方法
 */
let configs = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export const UPPOST = (url,params)=>{
    return axios.post(`${baseUrl}${url}`,params,configs)
        .then((data) => {
            return data
        })
}
