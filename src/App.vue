<template v-cloak>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    padding: 50px 110px;
}

body {
    font-family: 'Roboto';
}
</style>


