<template>
    <div class="bio">
        <!-- <p class="bioheader"><span class="briosa">A</span>ngelus <span class="briosa">S</span>chnabl {{ data.short }}</p> -->
        <div class="bioheader">Angelus Schnabl {{ data.short }}</div>
        <div class="bioholder">
            {{ data.bio }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})
</script>

<style>
.bioheader {
    max-width: 52ch;
    hyphens: auto;
    margin-bottom: .5em;
}

.bioholder {
    max-width: 52ch;
    hyphens: auto;
}
</style>