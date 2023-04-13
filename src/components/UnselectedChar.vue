<template>
    <div class="char-info">
        <p class="char-select">Please select a character to see information</p>
        <div class="char">
            <div class="anim char-wrap">
                <div class="anim char-circle"></div>
                <div class="anim char-mini-row"></div>
            </div>
            <div class="anim char-row"></div>
            <div class="anim char-row"></div>
            <div class="anim char-row"></div>
        </div>
    </div>
</template>

<style scoped>
.char-info {
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, .25);
    padding: 25px;
    position:static;
    width: 430px;
    z-index: 5;
}

.char-select {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
}

.char {
    margin-top: 30px;
}

.anim {
    animation: anim 1.5s ease-in-out .5s infinite;
}

.char-wrap {
    grid-column-gap: 10px;
    align-items: center;
    -webkit-column-gap: 10px;
    column-gap: 10px;
    display: grid;
    grid-template-columns: 40px auto;
}

.char-circle {
    background-color: #c4c4c4;
    border-radius: 100%;
    height: 40px;
    width: 40px;
}

.char-mini-row {
    background-color: #c4c4c4;
    width: 100%;
    height: 16px;
}

.char-row {
    height: 35px;
    margin-top: 15px;
    background-color: #c4c4c4;
    width: 100%;
}

@keyframes anim {
    0% {
        opacity: 1;
    }

    50% {
        opacity: .4;
    }

    100% {
        opacity: 1;
    }
}
</style>