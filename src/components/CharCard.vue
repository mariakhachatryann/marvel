<template>
    <div>
        <img :src="src+'.jpg'" alt="">
        <p> {{ name }}</p>
    </div>
</template>
 
<script>
export default {
    props: ["src", "name"]
}
</script>

<style scoped>
div {
    width: 180px;
    height: 310px;
    background: #232222;
    cursor: pointer;
        height: 318px;
    transition: transform .3s;
    width: 200px;
}

img {
    width: 200px;
    height: 200px;
}

p {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    margin: 13px 15px 74px 15px;
}
</style>