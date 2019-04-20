//   对象
const googleMap = {
    show(){
        console.log('开始渲染GOOGLE地图');
    }
}
const baiduMap = {
    // 为互换做准备
    show(){
        console.log('开始渲染BAIDU地图');
    }
}
const gaodeMap = {
    // 为互换做准备
    show(){
        console.log('开始渲染高德地图');
    }
}
const sosoMap = {

}
/**
 * 
 * @param {Object} map 
 */
const renderMap = (map) =>{
    // 检测map 上面是否有 show方法
    if(map.show && map.show instanceof Function){
        map.show();
    }else{
        return 0;
    }
    
    // googleMap.show();
    // 缺点 分支太多
    // if(type === 'baidu'){
    //     baiduMap.show();
    // }else if(type === 'google'){
    //     googleMap.show();
    // }
}

renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);