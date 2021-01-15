import * as API from "../index";
import "../../mockjs/mock"
/**
 * 
 * @param {Object} params 
 */
export const testList = (params)=>{
    return API.GET('/test/list',params)
}

export const GetEcharts = (params)=>{
    return API.GET('/test/echarts',params)
}