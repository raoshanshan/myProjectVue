<template>
    <div class="goodsItemList" @click="btnGoodsItem">
        <img :src="goods_items.show.img" alt=""  @load="ImgLoadFinished" />
        <div class="goods_item_info">
            <p>{{ goods_items.title }}</p>
            <span class="price">{{ goods_items.price }}</span>
            <span class="collect">{{ goods_items.cfav }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        goods_items: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods:{
      // 原生JS监听图片加载完成
      ImgLoadFinished(){
            // 事件总线,emit发射事件, goodsitem->goodsList->home
            this.$bus.$emit('itemImageLoad')
      },
      // 单个商品点击
      btnGoodsItem(){
        this.$router.push('/detail/'+this.goods_items.iid)
      }
    }
};
</script>

<style>
.goodsItemList {
    position: relative;
    width: 48%;
    padding-bottom: 40px;


}
.goodsItemList img {
    width: 100%;
    border-radius: 8px;
}
.goods_item_info {
    position: absolute;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
}
.goods_item_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 3px 0;
}
.price {
    color: red;
    padding-right: 30px;
    position: relative;
}

.goods_item_info .price::after {
    content: "";
    position: absolute;
    left: 41px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
