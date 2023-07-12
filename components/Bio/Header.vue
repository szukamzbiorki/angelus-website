<template>
    <div class="biobox">
        <div v-if="data.logo" class="bioimage">
            <SanityImage class="bioimg" :asset-id="data.logo.asset._ref" auto="format" />
        </div>
        <div class="bio">
            <div class="bioheader">Angelus Schnabl {{ data.short }}</div>
            <div class="bioholder">
                {{ data.bio }}
            </div>
            <div class="exhibitionstitle">CONTACT</div>
            <div class="contact">
                <a :href="'mailto:' + data.contactinfo[0]"> {{ data.contactinfo[0] }}</a><br>
                <a :href="'tel:' + data.contactinfo[1]">{{ data.contactinfo[1] }}</a>
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