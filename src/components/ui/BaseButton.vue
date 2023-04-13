<template>
    <button :class="{ gray: gray, grayCorn: grayCorn }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ["gray", "grayCorn"]
}
</script>

<style scoped>
button {
    cursor: pointer;
    font-size: 12px;
    color: white;
    background: #9F0013;
    display: inline;
    text-decoration: none;
    padding: 11px 16px;
    border: 3px solid white;
    margin-top: 15px;
    margin-right: 30px;
    position: relative;
    letter-spacing: 1px;
    outline: none;
    transition: transform .3s;
}

button:hover {
    transform: translateY(-5px);
}

button:before {
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

button:after {
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

button.gray {
    padding: 11px 30px;
    background: #5C5C5C;
}

.grayCorn {
    border: 3px solid #232222;
    padding: 13px 30px;
}

.grayCorn:before {
    background: #232222;
    border: 1px solid #232222;
}

.grayCorn:after {
    background: #232222;
    border: 1px solid #232222;
}</style>