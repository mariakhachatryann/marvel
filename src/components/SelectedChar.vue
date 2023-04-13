<template>
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="char-info">
        <div class="char-basics">
            <img :src="selectedChar.thumbnail.path + '.jpg'" alt="">
            <div>
                <div class="char-name">{{ selectedChar.name }}</div>
                <div class="char-btns">
                    <base-button>
                        <a :href="selectedChar.urls[0].url">HOMEPAGE</a>
                    </base-button>
                    <base-button :gray="true">
                        <a :href="selectedChar.urls[1].url">WIKI</a>
                    </base-button>
                </div>
            </div>
        </div>
        <div class="char-desc">{{ selectedChar.description ?  selectedChar.description : "Description not found" }}</div>
        <div class="char-comics">Comics:</div>
        <ul class="char-comics-list">
            <li v-if="selectedChar.comics.items.length === 0">There is no comic with this character</li>
            <li v-else v-for="comic in selectedChar.comics.items" class="char-comics-item">{{ comic.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        selectedChar() {
            return this.$store.getters["selectedCharacter"]
        }
    }
}
</script>

<style scoped>
.char-info {
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .25);
    padding: 25px;
    position: relative;
    z-index: 5;
}

.char-basics {
    grid-column-gap: 25px;
    -webkit-column-gap: 25px;
    column-gap: 25px;
    display: grid;
    grid-template-columns: 150px auto;
}

.char-basics img {
    height: 150px;
    object-fit: cover;
    width: 150px;
}

.char-basics .char-name {
    font-size: 22px;
    font-weight: 700;
    line-height: 29px;
    text-transform: uppercase;
}

.char-basics .char-btns {
    margin-top: 25px
}

.char-desc {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
}

.char-comics {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 10px;
}

.char-comics-list {
    margin-top: 10px;
    position: relative;
    list-style-type: none;
}

.char-comics-item {
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
    line-height: 25px;
    margin-top: 10px;
    padding: 0 10px;
    width: 100%;
    list-style-type: none;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>