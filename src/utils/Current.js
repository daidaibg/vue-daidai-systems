/**
 * 
 * @author daidai
 * @date 2021.01.13
 * @content 公共方法
 */

/**
   * 窗口移动   
   * @param {Object} e EVENT
   * @param {Number} marginleft  窗口的marginleft 多少就写多少无单位
 */
export const dragss =(e,marginleft)=>{
    if(!marginleft){
        marginleft = 0; 
    }
    let odiv = e.currentTarget.parentElement ;       
    let disX = e.clientX - odiv.offsetLeft;
    let disY = e.clientY - odiv.offsetTop;
    document.onmousemove = (e)=>{  
        odiv.style.left = e.clientX - disX+marginleft + 'px';
        odiv.style.top = e.clientY - disY + 'px';
        return false;
    };
    document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
    };
    return false;
  } 

  /**
   * 树状结构返回路径
   * @param {Object} result
   * @param {Object} route
   */
export const returnMenuPath = (result,route) => {
  let silder ={}
    for (let i = 0; i < result.length; i++) {
      if (result[i].subs !== undefined) {
        for (let y = 0; y < result[i].subs.length; y++) {
          if(result[i].subs[y].subs == undefined){
            if (result[i].subs[y].url === route.path) {
              silder.openKeys = [result[i].url];
              silder.selectedKeys = [result[i].url,route.path];
              // console.log(silder.selectedKeys);
            }
          }else{
            for (let k = 0; k < result[i].subs[y].subs.length; k++) {
              if (result[i].subs[y].subs[k].url === route.path) {
                silder.openKeys = [result[i].url,result[i].subs[y].url];
                silder.selectedKeys = [result[i].url,result[i].subs[y].url,route.path];
                // console.log(silder.selectedKeys);
              }
            }
          }
        }
      }else{
        if(result[i].url == route.path){
          silder.openKeys = [result[i].url];
          silder.selectedKeys = [route.path];
        }
      }
    }
    // console.log(silder)
    return silder
  };
/**
 * 路径参数转换成对象
 * @param {String} url 
 */
export const returnUrl = (url) => {
  var newurl = url.split('?')
  var oldarray = newurl[1].split('&')
  var obj = {}
  for (var i = 0; i < oldarray.length; i++) {
    var arritem = oldarray[i]
    var item = arritem.split('=')
    obj[item[0]] = item[1]
  }
  return obj
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export const treeDataTranslate =(data, id, pid)=> {
    // console.log(data)
    if(data==null){
      return [];
    }
    data.sort(function(a,b){
      return a.orderNo - b.orderNo;
    })
    // console.log(data)
    var res = []
    var temp = {}
    for (var i = 0; i < data.length; i++) {
      temp[data[i][id]] = data[i]
    }
    for (var k = 0; k < data.length; k++) {
      
      if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
        if (!temp[data[k][pid]]['subs']) {
          temp[data[k][pid]]['subs'] = []
        }
        if (!temp[data[k][pid]]['_level']) {
          temp[data[k][pid]]['_level'] = 1
        }
        data[k]['_level'] = temp[data[k][pid]]._level + 1
        temp[data[k][pid]]['subs'].push(data[k])
  
        
      } else {
        res.push(data[k])
      }
    }
    // console.log(outurls)
    // console.log(res)
    return res
  }