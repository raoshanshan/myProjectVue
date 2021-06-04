<template>
    <div class="detail">
        <!-- 导航栏 -->
        <detai-nav class="detail-nav"/>
        <!-- 轮播图 -->
        <scroll class="content">
            <detail-swiper :topImgs="topImags"></detail-swiper>
            <!-- 商品相请 -->
            <detail-base-info :goods="goods"></detail-base-info>

            <ul>
                <li>11</li>
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
        </scroll>
    </div>
</template>

<script>
import detaiNav from "./childCom/DetailsNav";
import detailSwiper from "./childCom/DetailSwiper";
import detailBaseInfo from "./childCom/detailBaseInfo";

import Scroll from "../../components/common/scroll/Scroll";

import { getDetail, Goods } from "../../network/detail";
export default {
    name: "Detail",
    components: {
        detaiNav,
        detailSwiper,
        detailBaseInfo,

        Scroll,
    },
    data() {
        return {
            iid: null,
            topImags: [],
            goods: {},
        };
    },
    created() {
        this.iid = this.$route.params;
        getDetail(this.iid).then((res) => {
            // 1、获取顶部轮播图数据
            // console.log(res);
            const data = res.result;
            this.topImags.push(...res.result.itemInfo.topImages);
            // console.log(this.topImags);

            //2、获取详情页商品信息
            // 将所有复杂数据整合到一个GOODS类中
            this.goods = new Goods(
                data.itemInfo,
                data.columns,
                data.shopInfo.services
            );
            console.log(this.goods);
        });
    },
};
</script>

<style scoped>
.detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.content {
    height: calc(100% - 44px);
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
