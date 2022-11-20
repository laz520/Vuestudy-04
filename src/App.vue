<template>
  <div id="app">
<TabBar>
 <TabBarItem></TabBarItem>
  <TabBarItem></TabBarItem>
  <TabBarItem></TabBarItem>
  <TabBarItem></TabBarItem>


</TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/tabbar/TabBar"; //导入组件
import TabBarItem from "@/components/tabbar/TabBarItem";
export default {

  components:{
    TabBar  , //注册组件
    TabBarItem,
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
