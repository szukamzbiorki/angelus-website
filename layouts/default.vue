<template>
    <div class="wrapper">
        <Header></Header>
        <div class="content">
            <slot />
        </div>

    </div>
</template>

<style>
.content {
    margin-left: 250px;
    margin-top: 1ch;
    max-height: calc(100vh - 43px);
    overflow: scroll;
}

.content::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.content::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.content::-webkit-scrollbar-thumb {
    background: #000000;
}

@media screen and (max-width: 820px) {
    .content {
        margin-left: 0;
        margin-top: 1ch;
    }
}
</style>