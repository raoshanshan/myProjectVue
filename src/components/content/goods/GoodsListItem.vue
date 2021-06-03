<template>
    <div class="goodsItemList">
        <img :src="goods_items.show.img" alt="" />
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
