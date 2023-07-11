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
}

@media screen and (max-width: 820px) {
    .content {
        margin-left: 0;
        margin-top: 1ch;
    }
}
</style>