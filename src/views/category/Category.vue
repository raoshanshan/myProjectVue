<template>
    <div class="wrapper">
        <ul class="content">
            <li>分类列表210</li>
            <li>分类列表211</li>
            <li>分类列表212</li>
            <li>分类列表213</li>
            <li>分类列表214</li>

            <li>分类列表767</li>
            <li>分类列表768</li>
            <li>分类列表769</li>
            <li>分类列表770</li>
            <li>分类列表771</li>
            <li>分类列表772</li>
            <li>分类列表773</li>
            <li>分类列表774</li>
            <li>分类列表775</li>
            <li>分类列表776</li>
            <li>分类列表777</li>
            <li>分类列表778</li>
            <li>分</li>
            <li>分类列表796</li>
            <li>分类列表797</li>
            <li>分类列表798</li>
            <li>分类列表799</li>
            <li>分类列表800</li>
            <li>分类列表801</li>
            <li>分类列表802</li>
            <li>分类列表803</li>
            <li>分类列表804</li>
            <li>分类列表805</li>
            <li>分类列表806</li>
            <li>分类列表807</li>
            <li>分类列表808</li>
            <li>分类列表809</li>
            <li>分类列表810</li>
            <li>分类列表811</li>
            <li>分类列表812</li>
            <li>分类列表813</li>
        </ul>
    </div>
</template>

<script>
// 使用插件局部滚动
import Bscoll from "better-scroll";

export default {
    name: "category",
    data() {
        return {
            scroll: null,
        };
    },
    mounted() {
        // 根据类名查找标签
        this.scroll = new Bscoll(document.querySelector(".wrapper"), {
          // 监听滚动到的位置
            probeType: 3,
            pullUpLoad:true
        });
        this.scroll.on("scroll", (position) => {
            console.log(position);
        });
        this.scroll.on('pullingUp',()=>{
          console.log('上拉加载更多');
        })
    },
};
</script>

<style>
.wrapper {
    /* 原生实现局部scroll方法 */
    height: 150px;
    background-color: red;
    overflow: hidden;
}
</style>
