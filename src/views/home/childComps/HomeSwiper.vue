<template>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" />
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
    props: {
        banners: Array,
        default() {
            return [];
        },
    },
};
</script>

<style>
</style>
