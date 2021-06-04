<template>
<!-- v-if判断goods是否为空 -->
    <div class="base-info" v-if="Object.keys(goods).length !== 0">
        <div class="title-info">{{ goods.title }}</div>
        <div class="price">
            <span class="info-now-price">{{ '￥'+goods.nowPrice }}</span>
            <span class="info-old-price">{{ goods.oldPrice }}</span>
            <!-- 判断discount属性书否存在 -->
            <span
                class="info-discount"
                :style="{ backgroundColor: goods.discountBgColor }"
                v-if="goods.discount"
            >
                {{ goods.discount }}
            </span>
        </div>
        <div class="colums-info">
            <span>{{ goods.columns[0] }}</span>
            <span>{{ goods.columns[1] }}</span>
            <span>{{ goods.services[goods.services.length - 1].name }}</span>
        </div>

        <div class="info-service">
          <!-- index in length, n从1开启到length -->
      <span
        :key="index"
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        v-if="goods.services[index - 1].icon"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
    </div>
</template>

<script>
export default {
    name: "DetailBaseInfo",
    props: {
        goods: {
            type: Object,
        },
    },
};
</script>

<style scoped>
.title-info {
    font-size: 18px;
    color: rgb(27, 20, 20);
    padding: 10px;
    text-align: justify;
}
.price {
    position: relative;
}
.price span {
    padding-left: 8px;
}
.price span:nth-child(1) {
    color: rgb(245, 122, 122);
    font-size: 25px;
    font-weight: 700;
}
.price span:nth-child(2) {
    color: rgb(146, 146, 134);
    font-size: 15px;
    text-decoration: line-through;
}
.price span:nth-child(3) {
    position: absolute;
    top: -5px;
    display: inline-block;
    font-size: 10px;
    color: aliceblue;
    width: 50px;
    height: 25px;
    border-radius: 8px;
    text-align: center;
    line-height: 25px;
}
.colums-info {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: rgb(146, 146, 134);
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
   margin-top: 10px;
}
.colums-info  span{
  padding-bottom: 5px;
}
.info-service {
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}

.info-service-item span {
  font-size: 13px;
  margin-left: 5px;
  color: #333333;
}
</style>
