<template>
    <div id="app">
        <!-- 所有替换的组件都不会重新创建 ,exclude排除某个组件，记得设置组件的name-->
        <keep-alive exclude="Detail">
            <router-view />
        </keep-alive>

        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabBar/MainTabBar";
export default {
    name: "App",
    components: {
        MainTabBar,
    },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
