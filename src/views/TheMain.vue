<template>
    <main-banner></main-banner>
    <div class="character">
        <img src="@/assets/img/characters/loki.jpg" alt="" class="loki">
        <div class="info-block">
            <p class="name">LOKI</p>
            <p class="about">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey,
                and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf
                Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the
                stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir.
                In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
        </div>
    </div>
</template>

<style scoped>
.loki {
    width: 293px;
    height: 293px;
    margin-right: 50px;
}

.character {
    display: flex;
    margin-top: 50px;
}

.info-block {
    width: 530px;
}

.name {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 25px;
    color: #000000;
}

.about {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
}</style>