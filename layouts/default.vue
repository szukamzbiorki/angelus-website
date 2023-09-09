<template>
    <div class="wrapper">
        <Header></Header>
        <div class="content">
            <slot />
        </div>

    </div>
</template>

<style>
body {
    overflow: scroll;
}

.content {
    margin-left: 250px;
    margin-top: 1ch;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.content::-webkit-scrollbar {
    display: none;
}

@media screen and (max-width: 820px) {
    .content {
        margin-left: 0;
        margin-top: 1ch;
    }
}

@media screen and (min-width: 821px) {
    .content {
        max-height: calc(100vh - 43px);
        overflow: scroll;
    }
}
</style>