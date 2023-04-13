<template>
        <div class="banner">
            <img src="@/assets/img/chars.png" alt="" class="chars">
            <p class="text">New comics every week! <br> Stay tuned!</p>
            <img src="@/assets/img/avengers.png" alt="" class="avengers">
        </div>
</template>

<style scoped>
.banner {
    width: 1045px;
    height: 100px;
    background: #232222;
    margin-top: 50px;
    display: flex;
}

.chars {
    width: 152px;
    height: 100px;
    margin: 0px 30px 0 30px;
}
.avengers {
    width: 133px;
    height: 100px;
}

.text {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    display: inline-block;
    color: #FFFFFF;
    margin: 18px 350px 18px 70px;
}
</style>