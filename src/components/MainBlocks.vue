<template>
    <div class="main">
        <base-spinner v-if="isLoading"></base-spinner>
        <div class="random-info-block" v-else>
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
            
            isLoading: false
        }
    },
    methods: {
        async getChar() {
            this.isLoading = true
            await this.$store.dispatch("addRandomCharacter")
            this.randomChar = this.$store.getters["randomCharacter"]
            this.isLoading = false;
        }
    },
    async beforeMount() {
        await this.getChar()
    }

}
</script>

<style>
.main {
    width: 100%;
    margin: 50px 10px;
    display: flex;
}

.random-info-block,
.cta-block {
    width: 600px;
    height: 260px;
    box-shadow: 5px 5px 20px 0px #00000040;
    display: flex;
    z-index: 5;
}

.random-info-block .info .title {
    color: #000000;
    font-weight: 700;
    font-size: 22px;
    line-height: 25.78px;
}

.random-info-block .info {
    margin: 43px 35px 43px 0;
}

.random-info-block .info .description {
    color: #000000;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    margin-top: 7px;
    text-align: justify;
}

.random-info-block .img {
    margin: 43px 30px;
}

.random-info-block img {
    width: 180px;
    height: 180px;
}

.random-info-block,
.cta-block {
    width: 550px;
    height: 260px;
    box-shadow: 5px 5px 20px 0px #00000040;
    display: flex;
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

.button {
    cursor: pointer;
    font-size: 12px;
    color: white;
    background: #9F0013;
    display: inline;
    text-decoration: none;
    padding: 11px 17px;
    border: 3px solid white;
    margin-top: 10px;
    margin-right: 9px;
    position: relative;
    letter-spacing: 1px;
    outline: none;
}

.button.gray {
    padding: 11px 30px;
    background: #5C5C5C;
}

.button:before {
    content: '';
    width: 20px;
    height: 20px;
    background: white;
    border: 1px solid white;
    transform: rotate(45deg);
    position: absolute;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    top: -12px;
    left: -13px;
}

.button:after {
    content: '';
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid white;
    transform: rotate(-132deg);
    position: absolute;
    border-top: 0;
    border-left: 0;
    border-bottom: 0;
    top: auto;
    right: -13px;
    bottom: -12px;
}

.btn {
    border: 3px solid #232222;
    padding: 13px 30px;

}

.btn:before {
    background: #232222;
    border: 1px solid #232222;
}

.btn:after {
    background: #232222;
    border: 1px solid #232222;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>