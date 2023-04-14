<template>
    <div class="main">
        <base-spinner v-if="isLoading"></base-spinner>
        <div v-else>
            <div v-if="isAvailable">
                <div class="error-img">
                    <img src="@/assets/img/error.gif" alt="">
                </div>
            </div>
            <div v-else class="random-info-block">
                <div class="img">
                    <img :src="randomChar.thumbnail.path + '.jpg'" alt="">
                </div>
                <div class="info">
                    <p class="title">{{ randomChar.name }}</p>
                    <p class="description"> {{ randomChar.description ? randomChar.description.slice(0, 150) : "Description not found" }} </p>
                    <div class="btns">
                        <base-button>
                            <a :href="randomChar.urls[0].url">HOMEPAGE</a>
                        </base-button>
                        <base-button :gray="true">
                            <a :href="randomChar.urls[1].url">WIKI</a>
                        </base-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="cta-block">
            <div class="info">
                <p class="text"> Random character for today! <br> </p>
                <p class="text">Do you want to get to know him better?</p>
                <div class="container">
                    <div class="bottom">
                        <p class="text subtitle">Or choose another one</p>
                        <base-button :grayCorn="true" @click="getChar">TRY IT</base-button>
                    </div>
                    <div class="decorations">
                        <img src="@/assets/img/shield.png" alt="shield" class="sh">
                        <img src="@/assets/img/mjolnir.png" alt="mjolnir" class="mj">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            isAvailable: false
        }
    },
    methods: {
        async getChar() {
            this.isLoading = true
            await this.$store.dispatch("addRandomCharacter")
            this.randomChar = this.$store.getters["randomCharacter"]
            this.isLoading = false;
            if (!this.randomChar) {
                this.isAvailable = true
            } else {
                this.isAvailable = false
            }
        }
    },
    async beforeMount() {
        await this.getChar()
    }

}
</script>

<style scoped>
.main {
    width: 100%;
    margin: 50px 10px;
    display: flex;
}

.random-info-block,
.cta-block,
.error-img {
    width: 550px;
    height: 260px;
    box-shadow: 5px 5px 20px 0px #00000040;
    display: flex;
}

.error-img img {
    display: block;
    width: 250px;
    height: 250px;
    object-fit: contain;
    margin: 0px auto;
}

.random-info-block .img {
    margin: 43px 30px;
}

.random-info-block img {
    width: 180px;
    height: 180px;
}


.random-info-block .info {
    margin: 43px 35px 43px 0;
}
.random-info-block .info .title {
    color: #000000;
    font-weight: 700;
    font-size: 22px;
    line-height: 25.78px;
}


.random-info-block .info .description {
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    margin-top: 7px;
    text-align: justify;
}

.cta-block {
    position: relative;
    background: #232222;
    color: #FFFFFF;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
}

.cta-block .info {
    margin: 43px 136px 151px 40px;
}

.cta-block .text {
    white-space: nowrap;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
}

.subtitle {
    margin-top: 33px;
}

.decorations {
    display: flex;
    margin-left: 20px;
}

.decorations img {
    width: 100px;
    height: 100px;
}

.container {
    display: flex;
}

.bottom {
    margin-bottom: 40px;
}

.decorations img.sh {
    position: absolute;
    width: 100px;
    height: 100px;
    right: 60px;
    bottom: 15px;
}

.decorations img.mj {
    position: absolute;
    transform: rotate(-56.4deg);
    width: 136px;
    height: 136px;
    right: -20px;
    bottom: 35px;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>