<template>
  <div class="sortDiv">
	<div>
		<p><span>通过图片地址找icon：</span><icon-svg icon-class="cascader"/></p>
        <p><span>通过symbol引用方式</span><svg-icon icon-class="date"></svg-icon></p>
        <p><span>通过unicode引用方式</span><i class="iconfont">&#xe602;</i></p>
        <p><span>通过font-class引用方式</span><i class="iconfont icon-chongzhi"></i></p>
	</div> 
  </div>
</template>

<script>
//引入svg组件
import IconSvg from './IconSvg'
export default {
  name: 'Sort',
   components:{
     IconSvg,
   },
  data() {
    return {
    }
  },
  methods: {
	
  }
};
</script>

<style>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>