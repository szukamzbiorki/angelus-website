<template>
    <div>
        <Header></Header>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style>
.content {
    margin-left: 150px;
    margin-top: 1ch;
}
</style>