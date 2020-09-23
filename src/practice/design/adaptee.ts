var googleMap = {
    show: function () {
        console.log("开始渲染谷歌");
    }
}

var baiduMap = {
    display: function () {
        console.log("开始渲染百度");
    }
}

var baiduMapAdaptee = {
    show: function () {
        baiduMap.display();
    }
}

var renderMap = function (map) {
    if (map.show instanceof Function) {
        map.show();
    }
};
export default  function main () {
    renderMap(googleMap);
    renderMap(baiduMapAdaptee);
}

