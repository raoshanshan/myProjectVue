<template>
    <div class="recommendsView">
        <div  class="res-item" v-for="(item, index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" />
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeRecommendView",
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            },
        },
    },
};
</script>

<style>
.recommendsView{
     display: flex;
     text-align: center;
     font-size: 12px;
     padding: 15px 0 15px 0px;
     border-bottom: 8px solid #eee;
}
.res-item{
  flex: 1;

}
.res-item img{
  width: 70px;
  height: 70px;
 margin-bottom: 3px;
}

</style>
