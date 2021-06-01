<template>
<div class="nav-bar">
  <!-- 导航栏分为三部分 -->
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="rihght"></slot></div>
</div>
</template>

<script>
export default {
name:"NavBar"
}
</script>

<style>
.nav-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.left, .right{
  width: 60px;
}
.center{
  flex:1;
  color: aliceblue;
}
</style>
