<template>
    <BioHeader :data="data[0]"></BioHeader>
</template>
<script setup>
const query = groq`*[_type == "bio"]`

const sanity = useSanity()

const { data } = await useAsyncData('articles', () => sanity.fetch(query))

definePageMeta({
    layout: "default",
    pageTransition: {
        css: false,
        onBeforeEnter: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.set(el, {
                opacity: 0,
                yPercent: 50,
                filter: "blur(7px)"
            })
        },
        onEnter: (el, done) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 1,
                yPercent: 0,
                filter: "blur(0px)",
                duration: .3
            })
        },
        onLeave: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 0,
                yPercent: 50
            })
        }
    }
})
</script>