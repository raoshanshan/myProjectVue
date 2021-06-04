<template>
    <div class="detaiNav">
        <nav-bar>
            <div slot="left" class="pic" @click="back">
                <img src="../../../assets/img/common/back.svg" alt="" />
            </div>
            <div class="title" slot="center">
                <div
                    class="item"
                    v-for="(item, index) in titles"
                    :key="index"
                    @click="btn(index)"
                    :class="{ isClick: currentIndex == index }"
                >
                    {{ item }}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";
export default {
    name: "DetailNav",
    data() {
        return {
            titles: ["商品", "参数", "评论", "推荐"],
            currentIndex: 0,
        };
    },
    components: {
        NavBar,
    },
    methods: {
        btn(index) {
            // 记录当前点击的索引值
            this.currentIndex = index;
        },
        // 返回上一页
        back() {
            this.$router.back();
        },
    },
};
</script>

<style scoped>
.title {
    display: flex;
}
.item {
    flex: 1;
    font-size: 15px;
}
.isClick {
    color: cadetblue;
}
.pic {
    margin-top: 5px;
}
</style>
