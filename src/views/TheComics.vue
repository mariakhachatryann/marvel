<template>
    <main-banner></main-banner>
    <div class="complect" v-for="i in 2">
        <div class="comics" v-for="i in 2">
            <comic-block 
                v-for="comic in comics" 
                :img="comic.img" 
                :title="comic.title"
                :availability="comic.availability">
            </comic-block>
        </div>
    </div>
    <base-button :style="otherStyles">LOAD MORE</base-button>
</template>

<script>
import ComicBlock from "../components/ComicBlock.vue"
export default {
    components: {
        ComicBlock
    },
    data() {
        return {
            comics: [
                {
                    title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
                    img: "comic1.jpg",
                    availability: "9.99$"
                },
                {
                    title: "X-Men: Days of Future Past",
                    img: "comic2.jpg",
                    availability: "NOT AVAILABLE"
                }
            ]
        }
    },
    computed: {
        otherStyles() {
            return "padding: 12px 45px; left: 430px;"
        }
    }
}
</script>

<style scoped>
.comics {
    display: flex;
}

.complect {
    display: flex;
}
</style>