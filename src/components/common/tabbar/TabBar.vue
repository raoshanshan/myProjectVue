<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar",
};
</script>

<style>
#tabbar {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.05);
}
</style>
