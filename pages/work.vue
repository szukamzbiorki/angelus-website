<template>
    <Works :data="projects"></Works>
</template>

<script setup>
const query = groq`*[_type == "project"]{date, link, title, _id}`

const sanity = useSanity()

const { data: projects } = await useAsyncData('articles', () => sanity.fetch(query))


definePageMeta({
    layout: "default",
    pageTransition: {
        css: false,
        onBeforeEnter: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.set(el, {
                opacity: 0,
                filter: "blur(7px)"
            })
        },
        onEnter: (el, done) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 1,
                filter: "blur(0px)",
                duration: .3
            })
        },
        onLeave: (el) => {
            const { $gsap } = useNuxtApp()
            $gsap.to(el, {
                opacity: 0,
            })
        }
    }
});
</script>