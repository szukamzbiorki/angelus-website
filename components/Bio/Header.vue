<template>
    <div class="biobox">
        <div class="bioboxerki">
            <div class="bioheader">Angelus Schnabl {{ data.short }}</div>
            <div class="bioholder">
                {{ data.bio }}
            </div>
            <div class="exhibitionstitle">CONTACT</div>
            <div class="contact">
                <a :href="'mailto:' + data.contactinfo[0]"> {{ data.contactinfo[0] }}</a><br>
                {{ data.contactinfo[1] }}
            </div>
        </div>
        <div v-if="data.logo" class="bioimage">
            <SanityImage :h="h" class="bioimg" :asset-id="data.logo.asset._ref" auto="format" />
        </div>
    </div>
</template>

<script setup>
let h = ref(365)

onMounted(() => {
    let bio = document.querySelector(".bio")
    // h.value = bio.offsetHeight
    console.log(bio.offsetHeight);
})
const props = defineProps({
    data: Object
})
</script>

<style>
.bioboxerki {
    margin-right: 1em;
}

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

.bioholder {
    max-width: 52ch;
    hyphens: auto;
}
</style>