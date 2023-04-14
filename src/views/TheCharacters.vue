<template>
    <main-blocks></main-blocks>
    <div class="wrapper">
        <base-spinner v-if="isLoading"></base-spinner>
        <div v-else class="cards">
            <char-card @click="selectChar(char)" v-for="char in characters" :src="char.thumbnail.path" :name="char.name"></char-card>
        </div>
        <keep-alive>
            <component :is="selectedChar ? 'SelectedCharacter': 'UnselectedChar'"></component>
        </keep-alive>
    </div>
    <base-spinner v-if="loading"></base-spinner>
    <base-button v-else @click="loadChars" :style="otherStyles">LOAD MORE</base-button>
    <img src="../assets/img/pngwing.png" alt="pngwing" class="bottomimg" :style="style">
</template>

<script>
import MainBlocks from "../components/MainBlocks";
import CharCard from "@/components/CharCard.vue";
import UnselectedChar from "@/components/UnselectedChar.vue";
import SelectedCharacter from "@/components/SelectedChar.vue"

export default {
    data() {
        return {
            characters: this.$store.getters["characters"],
            selectedChar: null,
            top: 1130,
            isLoading: false,
            loading: false
        }
    },
    components: {
        MainBlocks, CharCard, UnselectedChar, SelectedCharacter
    },
    methods: {
        async loadChars() {
            this.loading = true
            await this.$store.dispatch("loadChars");
            this.top += 1104;
            this.loading = false
        },
        selectChar(char) {
            this.selectedChar = char
            this.$store.commit("select", char)
        }
    },
    async mounted() {
        this.isLoading = true
        await this.$store.dispatch("loadChars");
        this.isLoading = false
    },
    computed: {
        otherStyles() {
            return "padding: 11px 40px; margin-top: 15px; margin-left: 225px"
        },
        style() {
            return `top: ${this.top}px`
        }
    },
}
</script>

<style scoped>
.wrapper,
.cards {
    grid-column-gap: 25px;
    -webkit-column-gap: 25px;
    column-gap: 25px;
    display: grid;
}

.wrapper {
    align-items: start;
    grid-template-columns: 650px 425px;
    margin-top: 50px;
}

.cards {
    grid-row-gap: 30px;
    grid-template-columns: repeat(3, 200px);
    row-gap: 30px;
}

.bottomimg {
    position: absolute;
    width: 467px;
    height: 372px;
    right: 0;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 0;
    
}
</style>