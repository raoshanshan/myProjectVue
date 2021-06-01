<template>
    <div id="home">
        <nav-bar class="home_nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"> </home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import homeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";

import { getHomeMutiData } from "../../network/home";
export default {
    name: "Home",
    components: {
        NavBar,
        homeSwiper,
        HomeRecommendView,
    },

    data() {
        return {
            banners: [],
            recommends: [],
        };
    },
    //  组件创建完就应该发送网络请求
    created() {
        getHomeMutiData().then((res) => {
            //  保存请求到的数据s,因为箭头函数执行完，res会被垃圾内存，因为result还指向res所指向的数据所以不会被回收
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        });
    },
};
</script>

<style>
.home_nav {
    background-color: #ff8198;
}
</style>
