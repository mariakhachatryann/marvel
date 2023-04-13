<template>
    <header>
        <div class="title">
            <span>Marvel</span> information portal
        </div>
        <nav class="menu">
            <ul>
                <li>
                    <router-link to="/characters" active-class="active">Characters</router-link>
                </li>
                <li> / </li>
                <li>
                    <router-link to="/comics" active-class="active">Comics</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

header .title {
    color: #000000;
    font-size: 28px;
    line-height: 32.81px;
    font-weight: 700;
    cursor: pointer;
}

header .title span {
    color: #9F0013;
}

li {
    list-style: none;
    display: inline;
    font-size: 24px;
    color: #000000;
    line-height: 28.13px;
    font-weight: 700;
}

.active {
    color: #9F0013;
}

a {
    text-decoration: none;
    color: #000000;
}
</style>