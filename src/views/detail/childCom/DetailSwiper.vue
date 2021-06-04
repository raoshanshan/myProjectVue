<template>
<div class="mainswiper">
 <swiper class="swi-swiper">
   <swiper-item class="swiper-item" v-for="(item,index) in topImgs" :key="index">
     <img :src="item" alt="">
   </swiper-item>
 </swiper>
 </div>
</template>

<script>
import { Swiper, SwiperItem} from'../../../components/common/swiper/index'

export default {
name:"DetailSwiper",
components:{
  Swiper, SwiperItem
},
props:{
  topImgs:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.swi-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
