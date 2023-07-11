<template>
    <div class="biobox">
        <div v-if="data.logo" class="bioimage">
            <SanityImage class="bioimg" :asset-id="data.logo.asset._ref" auto="format" />
        </div>
        <div class="bio">
            <!-- <p class="bioheader"><span class="briosa">A</span>ngelus <span class="briosa">S</span>chnabl {{ data.short }}</p> -->
            <div class="bioheader">Angelus Schnabl {{ data.short }}</div>
            <div class="bioholder">
                {{ data.bio }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object
})
</script>

<style>
.biobox>* {
    display: inline-block;
    vertical-align: top;
}

.bioimage {
    margin-right: .5em;
}

.bioheader {
    max-width: 52ch;
    hyphens: auto;
    margin-bottom: .5em;
}

.bioimg {
    max-height: 30ch;
}

.bioholder {
    max-width: 52ch;
    hyphens: auto;
}
</style>