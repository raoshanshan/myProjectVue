<template>
<div class="goods-list">
   <goods-list-item  v-for="(item,index) in goods"  :key="index" :goods_items="item"></goods-list-item>
</div>
</template>

<script>
import GoodsListItem  from "./GoodsListItem"
export default {
  name:"GoodsList",
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.goods-list{
   display: flex;
   /* 包裹，根据宽度进行显示 */
   flex-wrap: wrap;
   /* 均等分 */
   justify-content: space-around;
}
</style>
