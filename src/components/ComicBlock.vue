<template>
    <div class="comic-block">
        <img :src="require(`../assets/img/comics/${img}`)" alt="" class="comic-img" >
        <p class="title"> {{ title }}</p>
        <p  class="price"> {{ availability }}</p>
    </div>
</template>

<script>
export default {
    props: ["img", "title", "availability"]
}
</script>

<style scoped>
.comic-block {
    width: 225px;
    margin: 40px 50px 50px 0;
    cursor: pointer;
}

.comic-img {
    width: 225px;
    height: 346px;
    margin-bottom: 10px;
}

.title {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
}

.price {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #00000099;
    margin-top: 7px;
}
</style>