<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad" />
            </a>
        </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

export default {
    name: "homeSwiper",
    components: {
        Swiper,
        SwiperItem,
    },
    data() {
        return{
           isLoad: false
        }

    },
    props: {
        banners: Array,
        default() {
            return [];
        },
    },
    methods: {
        imgLoad() {
          // 只发送一次,计算off只需要一次
            if (!this.isLoad) {
                this.$emit("imgSwiperLoad");
                this.isLoad=true
            }
        },
    },
};
</script>

<style>
</style>
