<template>
    <!-- ref一般直接绑定给子组件，用于父组件拿到子组件
ref如果是绑定在组件上，获取到的是组件对象   this.$refs.refnames
ref如果绑定在p普通标签元素div span p上，拿到的是该标签对象 类似 document
-->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
// import observeDom from '@better-scroll/observe-dom'
export default {
    name: "Scroll",
    data() {
        return {
            scroll: null,
        };
    },
    props: {
        // 设置是否实时监听
        probeType: {
            type: Number,
            default: 0,
        },
        pullUpLoad: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        // 通过document.querySelector(".wrapper")获取query元素不是很好，因为可能该组件引入到其他文件，可能会遇到重名
        // this.bscroll=new Bscroll(document.querySelector(".wrapper"))
        // 这种方式拿到的肯定是wrapper，不是其他的class指为wrapper的元素
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
        });
        // 监听滚动的位置
        if (this.probeType == 2 || this.probeType == 3) {
            this.scroll.on("scroll", (position) => {
                // console.log(position);
                this.$emit("scroll", position);
            });
        }
        //监听上拉事件
        if (this.pullUpLoad) {
            this.scroll.on("pullingUp", () => {
                // 把这个事件传出去，告诉父亲已经上拉
                this.$emit("pullingUp");
                // console.log("sss");
            });
        }
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll.scrollTo(x, y, time);
        },
        finished() {
            this.scroll.finishPullUp();
        },
        refresh() {
            // console.log("2222");
            this.scroll && this.scroll.refresh();
        },
    },
};
</script>
<style scoped>
</style>
