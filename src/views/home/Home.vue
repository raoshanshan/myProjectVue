<template>
    <div id="home">
        <nav-bar class="home_nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control
            class="tabcontrol2"
            :titles="['流行', '新款', '精选']"
            @tabClick="tabClick"
            ref="tabControl"
            v-show="isTabfixed"
        ></tab-control>
        <scroll
            class="content"
            ref="scroll"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :probe-type="3"
            :click="true"
            :pull-up-load="true"
        >
            <home-swiper :banners="banners" @imgSwiperLoad="imgSwiperLoad">
            </home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <feature-view></feature-view>
            <tab-control
                class="tabcontrol"
                :titles="['流行', '新款', '精选']"
                @tabClick="tabClick"
                ref="tabControl"
            ></tab-control>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <!-- 在组件上绑定事件 -->
        <back-top @click.native="clickBack" v-show="isShowBack"></back-top>
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
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backTop/BackTop";
//方法引入
import { getHomeMutiData, getHomeGoods } from "../../network/home";
import { debounce } from "../../common/utils";

export default {
    name: "Home",
    components: {
        homeSwiper,
        HomeRecommendView,
        FeatureView,
        NavBar,
        TabControl,
        BackTop,
        GoodsList,
        Scroll,
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
            currentType: "pop",
            isShowBack: false,
            tabOffsetTop: 0,
            isTabfixed: false,
            saveY:0
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
    mounted() {
        // 图片加载完的时间监听
        const refresh = debounce(this.$refs.scroll.refresh, 500);
        //3、监听goodsItems中图片加载监听，main原生中需要加入bus  new VUE实例作为事件总线
        // 将refresh函数传入debounce，返回值也是一个函数

        // 只要还有加载，就一直赋值timer 直到delay延时时间到，还没有新的图片加载，那就进行刷新，防止过度刷新
        this.$bus.$on("itemImageLoad", () => {
            // console.log("222222");  //一共要刷新30次，需要进行防抖
            refresh();
        });
    },
    activated(){
          this.$refs.scroll.scrollTo(0,this.saveY)
          this.$refs.scroll.refresh()
    },
    deactivated(){
         this.saveY=this.$refs.scroll.scroll.y
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list;
        },
    },
    methods: {
        /*
      事件监听相关的方法
      */
        //  防抖函数bounce：func(执行的函数),delay（需要等待的时间）
        // 加载更多的方法
        loadMore() {
            this.getHomeGoods(this.currentType);
        },
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = "pop";
                    break;
                case 1:
                    this.currentType = "new";
                    break;
                case 2:
                    this.currentType = "sell";
                    break;
            }
        },
        clickBack() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        // 监听打印位置
        contentScroll(position) {
            // 打印位置
            // console.log(position);
            // 判断回到顶部的按钮是否显示
            this.isShowBack = -position.y > 1000;
            // 决定tabControl是否吸顶,position:fixed
            this.isTabfixed = -position.y > this.tabOffsetTop;
        },
        // 监听上拉加载
        // learnMore() {
        //     //  console.log("上拉加载更多");
        //     this.getHomeGoods(this.currentType);
        //     // 没调用完一次需要进行刷新，scroll重新计算滚动区域，因为图片加载是异步的
        //     // this.$refs.scroll.refresh()
        // },
        /*
      网络请求监听相关的方法
      */
        //  轮播图数据的请求
        // 避免created过于庞大
        getHomeMutiData() {
            getHomeMutiData().then((res) => {
                //  保存请求到的数据s,因为箭头函数执行完，res会被垃圾内存，因为result还指向res所指向的数据所以不会被回收
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            });
        },
        // 获取商品数据的请求
        getHomeGoods(type) {
            // 每次从上次一次的页数+1开始加载数据
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then((res) => {
                // console.log(res.data);
                // 加入pop
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page++;

                // 每次上拉完，只能加载一次为了下一次能够继续加载需要调用finishedUp
                this.$refs.scroll.finished();
            });
        },
        // 轮播图加载完成
        imgSwiperLoad() {
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        },
    },
};
</script>

<style scoped>
#home {
    height: 100vh;
    position: relative;
}
.home_nav {
    /* position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9; */
    background-color: #ff8198;
}
.tabcontrol2{
  position: relative;
  z-index: 9;
}
.content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
/* .tabControlFixed{
  position: fixed;
  left: 0;
  top: 44px;
  right: 0;
} */
</style>
