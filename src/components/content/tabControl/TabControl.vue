<template>
    <div id="tab-control">
        <!-- 只是文字不同的情况下，可以不适应插槽 -->
        <div
            v-for="(item, index) in titles"
            :key="index"
            class="tab-control-item"
            :class="{ active: index === currentIndex }"
            @click="btn(index)"
        >
            <span>{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    data() {
        return {
            // 默认第一个变红色
            currentIndex: 0,
        };
    },
    methods: {
        btn(index) {
            this.currentIndex = index;
            // 点击事件传出到父组件，进行切换
            this.$emit('tabClick',index)
        },
    },
    props: {
        titles: {
            type: Array,
            default() {
                return [];
            },
        },
    },
};
</script>

<style>
#tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
    margin-bottom: 10px;
}
.tab-control-item {
    flex: 1;
    height: 40px;
}
.active span {
    border-bottom: 2px solid rgb(139, 91, 94);
    padding: 5px;
}
.active{
 color: rgb(185, 41, 41);
}
</style>
