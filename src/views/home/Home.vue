<template>
    <div id="home">
        <nav-bar class="home_nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"> </home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <feature-view></feature-view>
        <tab-control
            class="tabcontrol"
            :titles="['流行', '新款', '精选']"
        ></tab-control>
        <goods-list :goods="goods['pop'].list"></goods-list>

        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>

            <li>1</li>
            <li>1</li>
        </ul>
        1
    </div>
</template>

<script>
// 子组件

import homeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

// 公共组件
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

//方法引入
import { getHomeMutiData, getHomeGoods } from "../../network/home";

export default {
    name: "Home",
    components: {
        homeSwiper,
        HomeRecommendView,
        FeatureView,
        NavBar,
        TabControl,
        GoodsList,
    },

    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                pop: {
                    page: 0,
                    list: [],
                },
                new: {
                    page: 0,
                    list: [],
                },
                sell: {
                    page: 0,
                    list: [],
                },
            },
        };
    },
    //  组件创建完就应该发送网络请求
    created() {
        // 请求轮播图数据
        this.getHomeMutiData();
        // 请求商品数据
        this.getHomeGoods("sell");
        this.getHomeGoods("pop");
        this.getHomeGoods("new");
    },
    methods: {
        // 避免created过于庞大
        getHomeMutiData() {
            getHomeMutiData().then((res) => {
                //  保存请求到的数据s,因为箭头函数执行完，res会被垃圾内存，因为result还指向res所指向的数据所以不会被回收
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
        },
        getHomeGoods(type) {
            // 每次从上次一次的页数+1开始加载数据
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then((res) => {
                // console.log(res.data);
                // 加入pop
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page++;
            });
        },
    },
};
</script>

<style>
#home {
    padding-top: 44px;
}
.home_nav {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    background-color: #ff8198;
}
.tabcontrol {
    /* 粘性定位 */
    position: sticky;
    top: 44px;
    z-index: 999;
}
</style>
