<template>
    <div class="bio">
        <div class="bioheader">{{ data.name }}—{{ data.short }}</div>
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
.bioholder {
    max-width: 60ch;
    text-align: justify;
    text-justify: inter-ideograph;
}
</style>