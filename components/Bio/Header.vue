<template>
    <div class="bio">
        <p class="bioheader"><span class="briosa">A</span>ngelus <span class="briosa">S</span>chnabl {{ data.short }}</p>
        <p class="bioholder">
            {{ data.bio }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})
</script>

<style>
.bioheader {
    max-width: 60ch;
    hyphens: auto;
}

.bioholder {
    max-width: 60ch;
    hyphens: auto;
}
</style>